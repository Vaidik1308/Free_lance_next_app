import { getAllCategories } from '@/lib/data'
import SingleCategory from './SingleCategory'
import { Category } from '../../../types'


type Props = {}

const CategoriesComp = async (props: Props) => {
  const categories:Category[] = await getAllCategories()
  return (
    <div className='my-8 flex flex-wrap gap-8'>
      {categories && (
        categories.map((category) => (
          <SingleCategory label={category.label} catSlug={category.catSlug} id={category.id} key={category.id}/>
        ))
      )}
    </div>
  )
}

export default CategoriesComp