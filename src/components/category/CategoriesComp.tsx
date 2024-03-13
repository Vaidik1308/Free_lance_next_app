import SingleCategory from './SingleCategory'

type Props = {}

const CategoriesComp = (props: Props) => {
  return (
    <div className='my-8 flex flex-wrap gap-8'>
      <SingleCategory category="View All"/>
      <SingleCategory category="Design"/>
      <SingleCategory category="Development"/>
      <SingleCategory category="Marketing"/>
      <SingleCategory category="Customer Service"/>
      <SingleCategory category="Finance"/>
    </div>
  )
}

export default CategoriesComp