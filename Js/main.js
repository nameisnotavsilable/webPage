//document.getElementById('Aop').textContent='hello';
//console.log(document.getElementById('Aop'));
//datebase
//记录题目几题
let index=null;
const submitbut=document.getElementById('submitBtn');
const questiones=[{timu:'题目1来了',answer:'a',optiones:['1选项','2选项','3选项']},{timu:'题目2',answer:'b',optiones:['4选项','5选项','6选项']},
{timu:'题目3',answer:'c',optiones:['4选项','5选项','6选项']}];
//生成题目
function generatequ(){
    const randomindex=Math.floor(Math.random()*questiones.length);
    const currentqu=questiones[randomindex];
    document.getElementById('question').textContent=currentqu.timu;
    document.getElementById('Aop').textContent=currentqu.optiones[0];
    document.getElementById('Bop').textContent=currentqu.optiones[1];
    document.getElementById('Cop').textContent=currentqu.optiones[2];
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