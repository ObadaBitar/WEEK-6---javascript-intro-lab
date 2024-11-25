
(() => {
    
    {
        const convertForm = document.querySelector('#formGbpToEuro');
        const msg = document.querySelector('.msgGbpToEuro');
        const sbmtBtn = document.querySelector('form #formGbpToEuro .submitBtn')

        convertForm.addEventListener('submit', (ev) =>{
            ev.preventDefault();
            let pricePounds = parseFloat(document.getElementById('pounds').value);
            const exchangeRate = 0.86;
            let priceEuros = 0 
            
            if(isNaN(pricePounds)){
                msg.style.display = "block"
                msg.innerHTML = "You must enter a number";
                msg.setAttribute('class', 'error');
            }
            else{
                if(pricePounds === 0){
                    msg.style.display = "block";
                    msg.innerHTML = "You must enter more than zero."
                    msg.setAttribute('class', 'error');
                }else{
                    priceEuros = pricePounds * exchangeRate;
                    msg.style.display = "block";
                    priceEuros = priceEuros.toFixed(2);
                    msg.innerHTML = "You will get &euro;"+priceEuros;
                    msg.removeAttribute('class');
                }
            }
            
        });
        
        document.getElementById('pounds').addEventListener('focus', (ev) =>{
            ev.target.value = "";
            msg.innerHTML = "";
            msg.removeAttribute('class');
        });
    }

    {
        const convertForm = document.querySelector('#formEuroToGbp');
        const msg = document.querySelector('.msgEuroToGbp');
        const sbmtBtn = document.querySelector('#formEuroToGbp .submitBtn')
        
        convertForm.addEventListener('submit', (ev) =>{
            ev.preventDefault();
            let priceEuros = parseFloat(document.getElementById('euros').value);
            const exchangeRate = 0.86;
            let pricePounds = 0 
            
            if(isNaN(priceEuros)){
                msg.style.display = "block"
                msg.innerHTML = "You must enter a number";
                msg.setAttribute('class', 'error');
            }
            else{
                if(priceEuros === 0){
                    msg.style.display = "block";
                    msg.innerHTML = "You must enter more than zero."
                    msg.setAttribute('class', 'error');
                }else{
                    pricePounds = priceEuros * exchangeRate;
                    msg.style.display = "block";
                    pricePounds = pricePounds.toFixed(2);
                    msg.innerHTML = "You will get &pound"+pricePounds;
                    msg.removeAttribute('class');
                }
            }
            
        });
        
        document.getElementById('euros').addEventListener('focus', (ev) =>{
            ev.target.value = "";
            msg.innerHTML = "";
            msg.removeAttribute('class');
        });
    }
})();