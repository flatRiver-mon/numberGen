$(document).ready(function(){
    
    function rand(max){
        let result = Math.floor(Math.random() * max) + 1;
        return result;
    }
    
    function maker(box){
        let arr = [];
        let isNotEnd = true;
            
        while(isNotEnd){
            let number = rand(45);
            if(arr.length == 0){
                arr.push(number);
            }else{
                // 중복체크
                let isDup = false;
                for(let i = 0; i < arr.length; i++){
                    // 만약에 중복된 번호가 있다면 중복 플래그를 킴
                    if(arr[i] == number){
                        isDup = true;
                        break;
                    }
                    // 중복된 번호가 없다면 중복 플래그를 끔
                    else if(arr[i] != number){
                        isDup = false;
                    }
                }
                // 만약에 중복이 없다면 번호 추가
                if(isDup == false){
                    arr.push(number);
                }
            }
            if(arr.length == 6){
                isNotEnd = false;
            }
        }

        arr.sort(function(a, b){
            return a - b;
        });

        for(let k = 0; k < arr.length; k++){
            $(box).append("<span class='badge badge-pill badge-success'>" + arr[k] + "</span> ");
        }
    }
    
    $("#genbtn").click(function(){
        $("#genbox").empty();
        // var count = parseInt($("#counter").val());
        maker("#genbox");
    });
    
    $("#counter").keyup(function(e){
        if(13 == e.keyCode){
            $("#genbtn").trigger("click");
        }
    });
    
});