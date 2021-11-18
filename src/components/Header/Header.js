import './Header.css'

export const Header = ({ onShowAddTask }) => {
    return (
        <header className="row">
            <h1>Task Tracker</h1>
            <button className="clickable" onClick={onShowAddTask}>Add</button>
        </header>
    )
}