import Nav from './Nav.js'
import NavItem from './NavItem.js'
import List from './List.js'
import ListItem from './ListItem.js'

export default function Movies({ movies }) {
  return (
    <div className="divide-y divide-slate-100">
      <Nav>

        <NavItem href="/top" isActive>Top Rated</NavItem>
        <NavItem href="/new" >New Releases</NavItem>
        {/* <NavItem href="/picks">Vincent’s Picks</NavItem> */}
      </Nav>
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </div>
  )
}