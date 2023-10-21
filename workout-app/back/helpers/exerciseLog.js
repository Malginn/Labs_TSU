export const reBuildTimes = (log, prevExLog = null) =>{  //ставим значение предыдущей тренировки
   return log.times.map((item, index) =>({
            ...item, //... оператор который расскрывает item без объекта с prevWeight на одном уровне
            prevWeight: prevExLog ? prevExLog.times[index].weight : 0, 
            prevRepeat: prevExLog ? prevExLog.times[index].repeat : 0 ,
    }))
}
