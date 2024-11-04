let tableContainer = document.querySelector(".tables");

let result = 0;

for (let index = 1; index <= 10; index++) {
    
    tableContainer.innerHTML += `
        <div class="tables__item">
        <h2 class="tables__title">
            Tabla del ${index}
        </h2>


        <ul class="tables__list data-id=${index}></ul>


        </div>
    `;
} 
