import { useState } from 'react'
import logo from './logo.svg'
import ReactPaginate from 'react-paginate'
import './App.css'

function App() {
  const [items, setItems] = useState([])

  const handlePageClick = (data) => {
      console.log(data.selected)
  }

  return (
    <div className="App">
        <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={10}
            marginPagesDisplayed={4}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-item'}
            activeClassName={'active'}
        />
    </div>
  )
}

export default App
