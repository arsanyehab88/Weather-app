


async function search (a){
    let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`)
    let result = await res.json()
    display(result.location , result.current),
    displayAfter(result.forecast.forecastday)
}
search("alexandria")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function display(a , t){
    if(null != t){
        var e = new Date(t.last_updated.replace(" ","T"))
        let x =`              

        <div class="weath  rounded-4">
          <div class="table">
            <div class="nav-weather rounded-4 text-white d-flex justify-content-between">
              <div class="day ms-2"><p>${days[e.getDay()]}</p></div>
              <div class="date me-2"><p>${e.getDate() + monthNames[e.getMonth()]}</p></div>
            </div>
           </div>    
              <div class="cloud ms-3 text-center">
              <img class="me-4" src="http:${t.condition.icon}" class="w-50" >
                <div class="location"><p class="fs-3">${a.name}</p></div>
                <div class="degree  text-center" >
                  <p class=" position-relative">${t.temp_c}<span class="position-absolute"> ْ</span><span class="ps-4">c</span></p>
                  
                </div>
                <div class="custom text-info">${t.condition.text}</div>
                <div class="icon d-flex justify-content-evenly me-4 pt-4 pb-1">
                  <span class="d-flex rotate ">
                    <i class="fa-solid fa-umbrella fs-4 "></i>
                    <p class="ms-2 fs-5">20%</p>
                  </span>
                  <span class="d-flex">
                    <i class="fa-solid fa-wind fs-4 me-1"></i>
                    <p class=" fs-5">18km/h</p>
                  </span>
                  <span class="d-flex ">
                    <i class="fa-regular fa-compass fs-4"></i>
                    <p class="fs-5 ms-2">East</p>
                  </span>
                </div>

              </div>   
          </div>
      </div>
      </div>`
      document.getElementById("data").innerHTML=x
    }
}

function displayAfter(a){
    let y =``
        y+=`
        <div class="weath  rounded-4 text-center">
          <div class="table">
            <div class="nav-weather rounded-4 text-white">
              <div class="day ms-2  pb-1"><p>${days[new Date(a[1].date.replace(" ","T")).getDay()]}</p></div>
            </div>
           </div>    
           <div class="cloud2-icon">
            <img src="https:${a[1].day.condition.icon}">
           </div>
           <div class="cloud2-content mt-2">
            <p class=" position-relative">${a[1].day.maxtemp_c} <span class="position-absolute"> ْ</span><span class="ps-4">c</span></p> 
           </div>
           <div class="cloud2-main">
            <p class="fs-1">${a[1].day.mintemp_c} <span> ْ</span></p>
            <p class="fs-3 text-info">${a[1].day.condition.text}</p>
           </div>
          </div>
        `  
    
    document.getElementById("next").innerHTML = y


    let x=``
    x+=`
    <div class="weath rounded-4 text-center">
    <div class="table">
      <div class="nav-weather rounded-4 text-white">
        <div class="day ms-2  pb-1"><p>${days[new Date(a[2].date.replace(" ","T")).getDay()]}</p></div>
      </div>
     </div>    
     <div class="cloud2-icon">
      <img src="https:${a[2].day.condition.icon}">
     </div>
     <div class="cloud2-content mt-2">
      <p class=" position-relative">${a[2].day.maxtemp_c} <span class="position-absolute"> ْ</span><span class="ps-4">c</span></p> 
     </div>
     <div class="cloud2-main">
      <p class="fs-1">${a[2].day.mintemp_c} <span> ْ</span></p>
      <p class="fs-3 text-info">${a[2].day.condition.text}</p>
     </div>
    </div>
    `
    document.getElementById("after").innerHTML = x
}

function searchLocation(){
    document.getElementById("search").addEventListener("keyup",a =>{
        if(a.target.value.length < 2){
            search("alexandria")
        }else{
            search(a.target.value)
        }
    })
}
searchLocation()


function searchClick(){
  document.getElementById("submit").addEventListener("click",a =>{
        search(a.target.value)  
})
}
searchClick()