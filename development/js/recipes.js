//Name local storage
const user = document.querySelector(".user-name");

if (localStorage.savedName == null) {
    user.innerText = "Imię";
} else {
    user.innerText = localStorage.savedName;
}




//Recipes list local storage
const tBodyRecipe = document.querySelector(".recipes-table-tbody");
const recipesLocalStorage = localStorage.getItem("recipe_");
const recipesListLocalStorage = JSON.parse(recipesLocalStorage);
const newRecipeSection = document.querySelector(".new-recipe-section");
const mainAppSectionContent = document.querySelector(".main-app-section-content");
const sectionRecipeNameInput = document.querySelector(".new-recipe-name input");
const sectionRecipeDscTextarea = document.querySelector(".new-recipe-dsc textarea");
const instructionList = document.getElementById("instruction_list");
const ingredientList = document.getElementById("ingredient_list");
const saveAndClose = document.getElementById("save-and-close")

newRecipeSection.style.display = "none";

if (localStorage.recipe_ == null || localStorage.recipe_ == "[]") {
    let h2 = document.createElement("h2");
    h2.innerText = "Twoja lista przepisów jest pusta :(";
    tBodyRecipe.appendChild(h2);
    tBodyRecipe.style.display = "flex";
    tBodyRecipe.style.alignItems = "center";
    tBodyRecipe.style.justifyContent = "center";
}
else {
    recipesListLocalStorage.forEach(e => {
        const trRecipe = document.createElement("tr");
        const tdRecipeId = document.createElement("td");
        const tdRecipeName = document.createElement("td");
        const tdRecipeDes = document.createElement("td");
        const tdRecipeIco = document.createElement("td");

        const editBtn = document.createElement("i");
        const deleteBtn = document.createElement("i");
        const saveBtn = document.createElement("i");

        editBtn.className = "fas fa-edit";
        deleteBtn.className = "fas fa-trash-alt";
        saveBtn.className = "fas fa-save";
        saveBtn.style.color = "gold";
        saveBtn.style.margin = "0 5px";
        saveBtn.style.cursor = "pointer";

        trRecipe.appendChild(tdRecipeId);
        trRecipe.appendChild(tdRecipeName);
        trRecipe.appendChild(tdRecipeDes);
        trRecipe.appendChild(tdRecipeIco);

        tdRecipeId.innerText = e.id;
        tdRecipeName.innerText = e.title;
        tdRecipeDes.innerText = e.description;
        tdRecipeIco.appendChild(editBtn);
        tdRecipeIco.appendChild(deleteBtn);
        tBodyRecipe.appendChild(trRecipe);
        tdRecipeIco.appendChild(saveBtn);



        deleteBtn.addEventListener("click", () => {
            recipesListLocalStorage.splice(this.data, 1);
            localStorage.setItem("recipe_", JSON.stringify(recipesListLocalStorage));
            window.location.reload(false);
        });

        editBtn.addEventListener("click", function () {
            mainAppSectionContent.style.display = "none";
            newRecipeSection.style.display = "flex";
            newRecipeSection.style.flexDirection = "column";
            sectionRecipeNameInput.value = e.title;
            sectionRecipeDscTextarea.value = e.description;

            e.instructions.forEach(function (e) {
                let instrLi = document.createElement("li");

                instrLi.innerText = e;
                instructionList.appendChild(instrLi);

                let newSaveIcon = document.createElement("i");
                let newEditIcon = document.createElement("i");
                let newTrashIcon = document.createElement("i");
                newTrashIcon.className = "fas fa-trash-alt";
                newTrashIcon.style.color = "red";
                newEditIcon.className = "fas fa-edit";
                newEditIcon.style.color = "gold";
                newEditIcon.style.margin = "0 5px";
                newSaveIcon.className = "fas fa-save";
                newSaveIcon.style.color = "blue";
                newSaveIcon.style.margin = "0 5px";
                newSaveIcon.style.display = "none";
                newSaveIcon.style.cursor = "pointer";
                newTrashIcon.style.cursor = "pointer";
                newEditIcon.style.cursor = "pointer";
                newTrashIcon.style.display = "inline";
                newEditIcon.style.display = "inline";


                instructionList.appendChild(newEditIcon);
                instructionList.appendChild(newTrashIcon);

                let recipe_name = document.querySelector("#recipe_name");
                let recipe_desc = document.querySelector("#recipe_desc");
                let instruction_butt = document.querySelector("#instruction_butt");
                let ingredient_butt = document.querySelector("#ingredient_butt");
                let instruction_list = document.getElementById("instruction_list");
                let ingredient_list = document.getElementById("ingredient_list");
                const save = document.getElementById("saveAndClose");

                instruction_butt.addEventListener("click", function () {
                    let value_instruction = document.getElementById("value_instruction");
                    let newSpan = document.createElement("span");
                    let newSaveIcon = document.createElement("i");
                    let newEditIcon = document.createElement("i");
                    let newTrashIcon = document.createElement("i");
                    newTrashIcon.className = "fas fa-trash-alt";
                    newTrashIcon.style.color = "red";
                    newEditIcon.className = "fas fa-edit";
                    newEditIcon.style.color = "gold";
                    newEditIcon.style.margin = "0 5px";
                    newSaveIcon.className = "fas fa-save";
                    newSaveIcon.style.color = "blue";
                    newSaveIcon.style.margin = "0 5px";
                    newSaveIcon.style.display = "none";
                    newSaveIcon.style.cursor = "pointer";
                    newTrashIcon.style.cursor = "pointer";
                    newEditIcon.style.cursor = "pointer";
                    newSpan.innerText = value_instruction.value;
                    if (!value_instruction.value) {
                        alert("Wpisz jakąś instrukcję :)");
                    } else {
                        let newLi = document.createElement("li");
                        newLi.appendChild(newSpan);
                        newLi.appendChild(newEditIcon);
                        newLi.appendChild(newSaveIcon);
                        newLi.appendChild(newTrashIcon);
                        value_instruction.value = "";
                        instruction_list.appendChild(newLi);
                    }
                    newTrashIcon.addEventListener("click", function () {
                        this.parentElement.style.display = "none";
                    });
                    newEditIcon.addEventListener("click", function () {
                        this.previousSibling.contentEditable = "true";
                        newEditIcon.style.display = "none";
                        newSaveIcon.style.display = "inline";
                    });
                    newSaveIcon.addEventListener("click", function () {
                        this.previousSibling.previousSibling.contentEditable = "false";
                        newSaveIcon.style.display = "none";
                        newEditIcon.style.display = "inline";
                    });
                });
            });

            e.ingredients.forEach(function (e) {
                let ingrLi = document.createElement("li");
                ingrLi.innerText = e;
                ingredientList.appendChild(ingrLi);

                let newSaveIcon = document.createElement("i");
                let newEditIcon = document.createElement("i");
                let newTrashIcon = document.createElement("i");
                newTrashIcon.className = "fas fa-trash-alt";
                newTrashIcon.style.color = "red";
                newEditIcon.className = "fas fa-edit";
                newEditIcon.style.color = "gold";
                newEditIcon.style.margin = "0 5px";
                newSaveIcon.className = "fas fa-save";
                newSaveIcon.style.color = "blue";
                newSaveIcon.style.margin = "0 5px";
                newSaveIcon.style.display = "none";
                newSaveIcon.style.cursor = "pointer";
                newTrashIcon.style.cursor = "pointer";
                newEditIcon.style.cursor = "pointer";

                ingredientList.appendChild(newEditIcon);
                ingredientList.appendChild(newTrashIcon);

                ingredient_butt.addEventListener("click", function () {
                    let value_ingredient = document.getElementById("value_ingredient");
                    let newSpan = document.createElement("span");
                    let newSaveIcon = document.createElement("i");
                    let newEditIcon = document.createElement("i");
                    let newTrashIcon = document.createElement("i");
                    newTrashIcon.className = "fas fa-trash-alt";
                    newTrashIcon.style.color = "red";
                    newEditIcon.className = "fas fa-edit";
                    newEditIcon.style.color = "gold";
                    newEditIcon.style.margin = "0 5px";
                    newSaveIcon.className = "fas fa-save";
                    newSaveIcon.style.color = "blue";
                    newSaveIcon.style.margin = "0 5px";
                    newSaveIcon.style.display = "none";
                    newSaveIcon.style.cursor = "pointer";
                    newTrashIcon.style.cursor = "pointer";
                    newEditIcon.style.cursor = "pointer";
                    newSpan.innerText = value_ingredient.value;
                    if (!value_ingredient.value) {
                        alert("Wpisz jakiś składnik :)");
                    } else {
                        let newLi = document.createElement("li");
                        newLi.appendChild(newSpan);
                        newLi.appendChild(newEditIcon);
                        newLi.appendChild(newSaveIcon);
                        newLi.appendChild(newTrashIcon);
                        value_ingredient.value = "";
                        ingredient_list.appendChild(newLi);
                    }
                    newTrashIcon.addEventListener("click", function () {
                        this.parentElement.style.display = "none";
                    });
                    newEditIcon.addEventListener("click", function () {
                        this.previousSibling.contentEditable = "true";
                        newEditIcon.style.display = "none";
                        newSaveIcon.style.display = "inline";
                    });
                    newSaveIcon.addEventListener("click", function () {
                        this.previousSibling.previousSibling.contentEditable = "false";
                        newSaveIcon.style.display = "none";
                        newEditIcon.style.display = "inline";
                    });
                });
            });
        });
    });
}

