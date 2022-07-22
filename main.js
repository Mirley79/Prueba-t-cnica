
//Functionality Menu hamburger//
var menu = document.querySelector('.burger');
function toggleMenu (event) {
    this.classList.toggle('is-active');
    document.querySelector( ".menu__burger" ).classList.toggle("is_active");
    event.preventDefault();
}
//event//
menu.addEventListener('click', toggleMenu, false);

//----------------------------------------------------------------------------------//

//Graphic functionality - section 2//
window.onload = function() {
    
    //Graphic visits//
    var graph1={
        animationEnabled: true,
        data: [
            {
                type: "spline", //change it to line, area, column, pie, etc//
                dataPoints: [
                    { label: "Lun", y: 3 }, //Change values for the X axis and Axis Y//
                    { label: "Mar", y: 3 },
                    { label: "Mie", y: 4 },
                    { label: "Jue", y: 5 },
                    { label: "Vie", y: 1 },
                    { label: "Sáb", y: 5.5 },
                    { label: "Dom", y: 4 },
                ]
            }
        ]
    };
    $(".chartContainer__1_1").CanvasJSChart(graph1);
    
    //Graphic conversions//
    var graph2={
        animationEnabled: true,
        data: [
            {
                type: "spline", //change it to line, area, column, pie, etc//
                dataPoints: [
                    { label: "Lun", y: 4 }, //Change values for the X axis and Axis Y//
                    { label: "Mar", y: 6 },
                    { label: "Mie", y: 4.5 },
                    { label: "Jue", y: 7 },
                    { label: "Vie", y: 4.5 },
                    { label: "Sáb", y: 5.5 },
                    { label: "Dom", y: 6 },
                ]
            }
        ]
    };
    $(".chartContainer__2_2").CanvasJSChart(graph2);
    
    //Graphic table conversions//
    var graph3={
        animationEnabled: true,
        data: [
            {
                type: "spline", //change it to line, area, column, pie, etc
                dataPoints: [
                    { label: "Lun", y: 5 }, //Change values for the X axis and Axis Y//
                    { label: "Mar", y: 2 },
                    { label: "Mie", y: 4 },
                    { label: "Jue", y: 5 },
                    { label: "Vie", y: 1 },
                    { label: "Sáb", y: 5.5 },
                    { label: "Dom", y: 3 },
                ]
            }
        ]
    };
    $(".chartContainer__3_3").CanvasJSChart(graph3);
    
    //Graphic sales//
    var graph4={
        animationEnabled: true,
        data: [
            {
                type: "spline", //change it to line, area, column, pie, etc//
                dataPoints: [
                    { label: "Lun", y: 0 }, //Change values for the X axis and Axis Y//
                    { label: "Mar", y: 1 },
                    { label: "Mie", y: 2 },
                    { label: "Jue", y: 1 },
                    { label: "Vie", y: 3 },
                    { label: "Sáb", y: 4 },
                    { label: "Dom", y: 4 },
                ]
            }
        ]
    };
    $(".chartContainer__4_4").CanvasJSChart(graph4);
}
