import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        alert('Clicked');
    }
    return (
        <header className='header'>
            <h1>{ title } </h1>
            <Button color='green' text='Add' onClick={onClick} />
           
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