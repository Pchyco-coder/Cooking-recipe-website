import { fetchData } from "../js/api.js";


/*
Add events on multiple ElementInternals
@param {NodeList} $elements NodeList
@param {string}  eventType  Event type string
@param {function} callback   callback function
*/


window.addEventOnElements = ($elements , eventType , callback)=>{
    for(let $element of $elements){
        $element.addEventListener(eventType,callback);
    }
}

export const cardQueries = [      //array
    ["field", "uri"],
    ["field", "label"],
    ["field", "image"],
    ["field", "totalTime"],
    
];


// Skeleton card

export const $skeletonCard = `
        <div class="card skeleton-card">
        <div class="skeleton card-banner"></div>


        <div class="card-body">
            <div class="skeleton card-title"></div>

            <div class="skeleton card-text"></div>

 
        </div>
        </div>
                `; 





                const ROOT = "https://api.edamam.com/api/recipes/v2"

                window.saveRecipe = function(element , recipeId){
                    const isSaved =window.localStorage.getItem(`cookio-recipe${recipeId}`);
                    ACCESS_POINT = `${ROOT}/${recipeId}`;

                    if(!isSaved){
                        fetchData(cardQueries, function (data){
                            window.localStorage.setItem(`cookio-recipe${recipeId}`, JSON.stringify(data));
                            element.classList
                            .toggle("saved")
                            element.classList
                            .toggle("removed")
                            showNotification("Added to recipe Book")
                        });
                        ACCESS_POINT=ROOT
                    }else{
                        window.localStorage.removeItem(`cookio-recipe${recipeId}`);
                        element.classList
                            .toggle("saved")
                            element.classList
                            .toggle("removed");
                            showNotification("Removed from recipe Book")
                    }



                }



                const $snackbarContainer=document.createElement("div");

                $snackbarContainer.classList.add("snackbar-container");
                document.body.appendChild($snackbarContainer);



                function showNotification(message){
                    const $Snackbar=document.createElement("div");
                   $Snackbar.classList.add("snackbar");
                  $Snackbar.innerHTML=`<p class="body-medium">
                    ${message}
                </p>`

                $snackbarContainer.appendChild($Snackbar);
                $Snackbar.addEventListener('animationend',e=>$snackbarContainer.removeChild($Snackbar));
                }