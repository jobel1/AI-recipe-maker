import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientList from "./IngredientList"
import { getRecipeFromMistral } from "../../ai"



export default function Main() {

    
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipeShown] = React.useState(false)
    
    async function getRecipe() {
        const generatedRecipe = await getRecipeFromMistral(ingredients)
        setRecipeShown(generatedRecipe)
    }

    // const ingredientsListItems = ingredients.map(ingredient => (
    //     <li key={ingredient}>{ingredient}</li>
    // ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && <IngredientList ingredients={ingredients} getRecipe={getRecipe}/> }
            
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}