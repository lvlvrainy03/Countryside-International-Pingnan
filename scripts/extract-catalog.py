"""Extract supplied profile records and web-sized media without changing the source."""
from pathlib import Path
from zipfile import ZipFile
from lxml import etree
from PIL import Image, ImageOps
import io, json, re, shutil

root=Path(__file__).resolve().parents[1]
ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main','a':'http://schemas.openxmlformats.org/drawingml/2006/main','r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
names='胡朱云 苏翠琴 沈明辉 刘思中 谢海清 曾仰钦 胡伦雅 沈久聪 包阿姨 陈光灿 程美信 福建惠泽龙酒业工人 高延厅 黄观发 黄梅珠 江思林 李关发 林德波 林剑华 林正碌 刘晓怡 陆丽琼 马惠东 潘国老 潘国毅 潘家贵 潘家如 彭珠英 祁国艳 青草店主 邱允滔 瓜田农人 苏维邦 吴伦理 谢桂任 薛世隆 杨美丽 郑振如 种子摊主 卓萍萍'.split()
out=root/'public/assets/people';out.mkdir(parents=True,exist_ok=True)
with ZipFile(root.parent/'副本 米三 人物信息+照片.docx') as z:
    doc=etree.fromstring(z.read('word/document.xml'))
    ps=doc.findall('w:body/w:p',ns)
    texts=[''.join(p.itertext()) for p in []]
    texts=[''.join(p.xpath('.//w:t/text()',namespaces=ns)).strip() for p in ps]
    rels={r.get('Id'):r.get('Target') for r in etree.fromstring(z.read('word/_rels/document.xml.rels'))}
    starts=[]
    for name in names:
        lookup='福建惠泽龙酒业车间工人' if name=='福建惠泽龙酒业工人' else name
        hits=[i for i,t in enumerate(texts) if i>=9 and t.startswith(lookup) and not t.endswith('.ai')]
        assert len(hits)==1,(name,hits)
        starts.append(hits[0])
    people=[]
    for idx,(name,start) in enumerate(zip(names,starts)):
        end=starts[idx+1] if idx+1<len(starts) else len(ps)
        pics=[]
        for p in ps[start:end]: pics+=p.xpath('.//a:blip/@r:embed',namespaces=ns)
        assert len(pics)==1,(name,pics)
        pid=f'food-{idx+1:02}'
        im=ImageOps.exif_transpose(Image.open(io.BytesIO(z.read('word/'+rels[pics[0]])))).convert('RGB')
        im.thumbnail((1000,1000));im.save(out/(pid+'.jpg'),quality=86,optimize=True)
        lines=[t for t in texts[start+1:end] if t and not re.fullmatch(r'[\d\s]+',t)]
        role=re.sub(r'^\d{4}年?\s*','',lines[0]) if lines else ''
        role=role.split('Pan Jiaru')[0].strip()
        if not re.search(r'[\u4e00-\u9fff]',role):role={'福建惠泽龙酒业工人':'酒业车间工人','青草店主':'青草店主','种子摊主':'种子摊主'}.get(name,'')
        header=re.sub(r'（全名暂缺）','',texts[start])
        tags=header.split()[1:]
        en=next((re.split(r'\s+-\s+',line,maxsplit=1)[-1] for line in lines if re.search(r'\s+-\s+',line)), '')
        if not en:en={'胡伦雅':'Poultry farmer','沈久聪':'Tea factory owner','福建惠泽龙酒业工人':'Worker at Fujian Huizelong Winery','青草店主':'Herbal shop owner','瓜田农人':'Cucumber grower','种子摊主':'Seed stall owner'}.get(name,'')
        people.append({'id':pid,'name':name,'role':role,'roleEn':en,'tags':tags,'image':'/assets/people/'+pid+'.jpg'})
    (root/'data/people.json').write_text(json.dumps(people,ensure_ascii=False,indent=2))
    print(json.dumps(people,ensure_ascii=False))
editorial=root/'public/assets/editorial';editorial.mkdir(exist_ok=True)
mapping={'conference':'12','camp':'13','milan':'08','food-media':'09',**{f'group-{i}':str(i) for i in range(14,19)}}
for name,page in mapping.items():shutil.copyfile(root.parent/f'tmp/pdfs/xiangtu/page-{page}.jpg',editorial/(name+'.jpg'))
