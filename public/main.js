getHTML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload=()=>{
        const div=document.createElement('div')
        div.innerHTML=request.response
        document.body.appendChild(div)
    }
    request.onerror=()=>{}
    request.send()
    };
getCSS.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open("GET","/style.css");
    request.onreadystatechange=()=>{
        console.log(request.readyState)
        if(request.readyState===4){
            //下载完成，但不知道是成功2xx 还是失败4xx 5xx
            if(request.status>=200&&request.status<300){
                         // console.log(request.status)
            const style=document.createElement("style")
            style.innerHTML=request.response
            document.head.appendChild(style)
            }else{
                alert('加载css失败,状态码为:'+request.status)
            }
 
        }
    }
    request.send();
}
getJS.onclick=()=>{
   const request=new XMLHttpRequest()
   request.open('GET','/2.js')
   request.onload=()=>{
    //    const script=document.createElement('script')
    //    script.innerHTML=request.response
    //    document.body.appendChild(script)
   }
   request.onerror=()=>{}
   request.send()   
}
getXML.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open("GET","/4.xml");
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            console.log(request.response);
        }
    }
    request.send()
}
getJson.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open("get","/5.json");
    request.onreadystatechange=()=>{
    if(request.readyState===4&&request.status===200){
        console.log(request.response)
        const object=JSON.parse(request.response)
        console.log(object)
        myName.textContent=object.name
    }   
    }
    request.send()
}
let n=1;
getPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            const array=JSON.parse(request.response)
            array.forEach(item=>{
                const li=document.createElement("li")
                li.textContent=item.id;
                xxx.appendChild(li)
            });
            n+=1
        }
    }
    request.send()
}
