export default function openFirstPoints(name, fun){
    if(name === 'Цена' || name === 'Цвет' || name === 'Сладость'){
        fun(true);
    }
}