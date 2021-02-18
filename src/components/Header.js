import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    
    return (
        <header className='header'>
            <h1>{ title } </h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick={onAdd} />
           
        </header>
    )
}

//Default props
Header.defaultProps = {
    title: 'Task Tracker',
}



//in a case you want to use inline styling use this:
// const headingStyle = {
//     color: 'orange', 
//     backgroundColor: 'blue'
// }
 
export default Header