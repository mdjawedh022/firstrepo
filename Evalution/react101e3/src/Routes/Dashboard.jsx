import { useEffect } from "react";
import { useContext, useState } from "react";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import ProductList from "../Components/ProductList";
import { AuthContext } from "../Context/AuthContext";

function Dashboard() {
  const { logoutUser, authState } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [orderBy, setOrderBy] = useState("asc");

  useEffect(() => {
    getData(page, orderBy);
  }, [page, orderBy]);

  const getData = async (page, orderBy) => {
    const url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&orderBy=${orderBy}`;

    setIsLoading(true);
    try {
      let res = await fetch(url);
      let data = await res.json();
      setProducts(data.data);
      setTotalPages(data.totalPages);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);

    }
  };

  const sorting = () => {
    if (orderBy === "asc") {
      setOrderBy("desc");
    } else {
      setOrderBy("asc");
    }
  };

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn">
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div data-testid="sort-container">
        <button
          disabled={orderBy === "asc"}
          onClick={sorting}
          data-testid="low-to-high">
          Sort low to high
        </button>
        <button
          disabled={orderBy === "desc"}
          onClick={sorting}
          data-testid="high-to-low">
          Sort high to low
        </button>
      </div>
      <br />
      <br />
      <Pagination
        totalPage={totalPages}
        current={page}
        onChange={(value) => setPage(value)}
      />
      {/* add Pagination component  */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Product Listing, remember to show loading indicator when API is loading */}

        {isLoading ? <Loader /> : <ProductList products={products} />}
      </div>
    </div>
  );
}

export default Dashboard;