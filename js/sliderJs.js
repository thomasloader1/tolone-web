$(window).ready(function(){
    //console.log("sliderjs.js works: ", window.$)
    changePointColor();

    $('#models').click(function(e){
        let { target } = e;
        if(target.nodeName === "SPAN" && !target.classList.contains('active-point')){
            $('#models .punto').each((k,point) => {
                console.log(point)
                if(point.classList.contains('active-point')){
                    point.style.backgroundColor = 'green';
                    point.classList.remove('active-point');
                }
            })
            target.classList.add('active-point');
            changePointColor();
        }
    })
    $('#nombreNumerosRemeras').click(function(e){
        let { target } = e;
        if(target.nodeName === "SPAN" && !target.classList.contains('active-point')){
            $('#nombreNumerosRemeras .punto').each((k,point) => {
                console.log(point)
                if(point.classList.contains('active-point')){
                    point.style.backgroundColor = 'green';
                    point.classList.remove('active-point');
                }
            })
            target.classList.add('active-point');
            changePointColor();
        }
    })
})

function changePointColor(containerPoints){
    $(`.punto`).each((k,v) => { 
        if(v.classList.contains('active-point')){
            v.style.background='#1565c0';
        }
    })
}

function posicionSlide(nSlide){
    let slides = $("[data-myslider]")
    $.each(slides, (i,v) =>{ 
        v.classList.remove('d-flex')
        v.classList.remove('d-none')
        //console.log(typeof parseInt(v.attributes[1].value) , typeof nSlide,parseInt(v.attributes[1].value) === nSlide)
        if(parseInt(v.attributes[1].value) === nSlide){
            v.classList.add("d-flex")
        }else{
            v.classList.add("d-none")
        }
    })    
}

function posicionSlideModels(nSlide){
    let slides = $("[data-slider-model]")
    console.log(slides)
    $.each(slides, (i,v) =>{ 
        v.classList.remove('d-flex')
        v.classList.remove('d-none')
        //console.log(typeof parseInt(v.attributes[1].value) , typeof nSlide,parseInt(v.attributes[1].value) === nSlide)
        if(parseInt(v.attributes[1].value) === nSlide){
            v.classList.add("d-flex")
        }else{
            v.classList.add("d-none")
        }
    })
}

if(drinkBeer){
    comeBackHead = true;
    rememberYou();
    howDoYouKiss = 'i like';
    meAndYou === true ? "We are for each other" : null;
}
