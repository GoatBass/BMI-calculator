$(function(){
    $('button').click(function(event){
        event.preventDefault();

        let h = $('#height').val()
        let w = $('#weight').val()

        const imc = (w / ((h*h)/10000)).toFixed(2)

        $('#results').text(imc)

        if(imc < 18.6){
            $('p:nth-of-type(1)').css('color', 'red')
        } else if(imc <= 24.9){
            $('p:nth-of-type(2)').css('color', 'green')
        } else {
            $('p:nth-of-type(3)').css('color', 'red')
        }
    })
})