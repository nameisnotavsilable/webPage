//document.getElementById('Aop').textContent='hello';
//console.log(document.getElementById('Aop'));
//datebase
//记录题目几题
let index=null;
const submitbut=document.getElementById('submitBtn');
const questiones=[{timu:'秋季应少吃的蔬菜',answer:'c',optiones:['A、菠菜','B、白萝卜','C、生姜','D、生菜']},
{timu:'健康的生活方式包括以下几个方面?',answer:'d',optiones:['A、合理膳食、讲究卫生、戒烟限酒、心理平衡','B、注意保健、适量运动、合理膳食、讲究卫生','C、劳逸结合、心理平衡、合理膳食、戒烟限酒','D、适量运动、合理膳食、戒烟限酒、心理平衡']},
{timu:'下列关于胃炎病人的正确描述是',answer:'c',optiones:['A、胃功能不好的人喝稀饭为好','B、胃病人可通过喝牛奶来补养身体','C、慢性胃炎患者禁止吃花生米','D、胃病病人可通过多吃糖来补充身体需要糖']}];
//生成题目
function generatequ(){
    const randomindex=Math.floor(Math.random()*questiones.length);
    const currentqu=questiones[randomindex];
    document.getElementById('question').textContent=currentqu.timu;
    document.getElementById('Aop').textContent=currentqu.optiones[0];
    document.getElementById('Bop').textContent=currentqu.optiones[1];
    document.getElementById('Cop').textContent=currentqu.optiones[2];
    document.getElementById('Dop').textContent=currentqu.optiones[3];
    console.log(randomindex);
    index=randomindex;
    //console.log(index);
}
//console.log(typeof(questiones[index].timu));
//检查答案返回交互提示,试一下答案作用域
function checkanswer(){
    const selectanswer=document.querySelector('input[name="answer"]:checked');
    if(selectanswer==null)alert('请输入答案');else{
        if(selectanswer.value==questiones[index].answer)alert('答对了');
            else{alert('答错了');}
    }
}
const data=new Date();
if(data.getFullYear()==2024){generatequ();}else{console.log(typeof(data));}
//提交答案并核对
submitbut.addEventListener('click',checkanswer);