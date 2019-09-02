function getDatelast(dateTimeStamp){
    if(dateTimeStamp==undefined){
        return false;
    }else{
        dateTimeStamp = dateTimeStamp.replace(/\-/g, "/");

        var sTime = new Date(dateTimeStamp).getTime();//把时间pretime的值转为时间戳
       
        var now = new Date().getTime();//获取当前时间的时间戳
        
        var diffValue = now - sTime;
         
        if(diffValue < 0){
            console.log("结束日期不能小于开始日期！");
        }

        //获取今天0点0分0秒的时间戳
        let getTodayUnix = function(){
                              var date = new Date();
                              date.setHours(0);
                              date.setMinutes(0);
                              date.setSeconds(0);
                              date.setMilliseconds(0);
                              return date.getTime();
                          }
      //获取标准年月日
      let getLastDate = function(time){
                          var date = new Date(time);
                          var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
                          var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                          return date.getFullYear() + '-' + month + '-' + day;
                      }

      var today = getTodayUnix();	//今天0点时间戳
      var timer = (now - sTime) / 1000;	//转换为秒级时间戳
      if(timer <= 0 || Math.floor(timer/60) <=0){
          return '刚刚';
      }
      if(timer < 3600){
          return Math.floor(timer/60) + '分钟前';
      }
      if(timer >=3600 && (sTime - today >= 0)){
          return Math.floor(timer/3600) + '小时前';
      }
      if(timer/86400 <= 31){
          return Math.ceil(timer/86400) + '天前';
      }
      return getLastDate(sTime);
    }

}