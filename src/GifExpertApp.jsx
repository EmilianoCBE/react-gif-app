import {useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Kirby'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return
        // setCategories([...categories, 'One punch man'])
        setCategories([...categories, newCategory])
        // setCategories(cat => [...cat, 'Mob Psycho 100'])
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ onAddCategory}
        />


        { 
            categories.map(category => (
                <GifGrid 
                    key={category} 
                    category={category}
                />    
            )) 
        }

    </>
  )
}

export default GifExpertApp