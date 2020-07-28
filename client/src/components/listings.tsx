import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link, RouteComponentProps } from 'react-router-dom'
// import { MatchProps } from './edit-listing'
import { RootState } from '../redux/root-reducer'
import { User } from '../redux/user/types'
// import { listingReducer, deleteListing } from '../redux/modules/listing';
import {
  getAllListings,
  createListing,
  deleteListing,
} from '../redux/modules/listing'

// type State = {
//   listings: []
// }

interface Props {
  listings?: any[]
  listing_info?: {
    street_address?: string
    city?: string
    zip_code?: string
    state?: string
    image_url?: string
    home_type?: string
    price?: string
    description?: string
  }
}

interface PagePagination {
  page?: number
  post_per_page?: number
}

const Listings: React.FC<RouteComponentProps & RootState & User> = ({
  match,
  history,
  // listings,
  ...props
}) => {
  // Resources to fixed possible pagination issues

  // https://github.com/larkintuckerllc/hello-pagination/blob/master/pagination/src/Example/ExampleControl.jsx
  // https://github.com/larkintuckerllc/hello-pagination/blob/master/pagination/src/apis/items.js

  const [state, setState] = useState<Props & PagePagination>({
    listings: [],
    listing_info: {
      street_address: '',
      city: '',
      zip_code: '',
      state: '',
      image_url: '',
      home_type: '',
      price: '',
      description: '',
    },
    page: 1,
    post_per_page: 10,
  })

  const [isRequesting, setRequest] = useState(false)

  useEffect(() => {
    getAllListings()
  }, [])

  // useEffect(() => {
  //   setState({
  //     listings,
  //   })
  // }, [listings])

  const fetchListings = () => {
    if (state?.listings?.length === 0) {
      return <h1>LOADING...</h1>
    } else {
      return state?.listings?.map((listing, idx) => {
        // console.log(this.state.listings)
        return (
          <div key={listing.id}>
            <h1>{listing.street_address}</h1>
            <p>{listing.city}</p>
            <button onClick={() => deleteListing(listing.id)}>DELETE</button>
            <Link to={`/listings/${listing.id}`}>Edit Listing</Link>
            <hr />
          </div>
        )
      })
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      listing_info: {
        [event.currentTarget.name]: event.currentTarget.value,
      },
    })
  }

  const createListing = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(state.listing_info)
    setState({
      listing_info: {
        street_address: '',
        city: '',
        zip_code: '',
        state: '',
        image_url: '',
        home_type: '',
        price: '',
        description: '',
      },
    })
  }

  // const deleteListingID = (id: any) => {
  //   console.log(id)
  //   deleteListing(id)
  // }

  setRequest(false)

  const goForward = () => {
    const { page } = state

    if (isRequesting) {
      return
    }
    setRequest(true)
    console.log(page)
    getAllListings(page && page + 1)
    setRequest(false)
    setState({ page: page && page + 1 })

    history.push(`/listings?page=${page}`)
  }
  // const goBackward = () => {
  //   const { page } = state

  //   if (isRequesting) {
  //     return
  //   }
  //   setRequest(true)
  //   console.log(page)
  //   getAllListings(page)
  //   setRequest(false)
  //   setState({ page: page && page - 1 })
  //   history.push(`/listings?page=${page}`)
  // }

  // const {
  //   street_address,
  //   city,
  //   zip_code,
  //   state,
  //   home_type,
  //   price,
  //   description,
  // } = this.state.newListing
  // const { postPerPage } = this.state

  return (
    <div>
      {/* <h3>
        Welcome {props.student?.first_name}, {props.student?.last_name}
      </h3>
      <form onSubmit={createListing}>
        <input
          type="text"
          placeholder="Type"
          onChange={handleChange}
          name="home_type"
          value={state.listing_info?.home_type}
        />
        <input
          type="text"
          placeholder="Amount"
          onChange={handleChange}
          name="price"
          value={state.listing_info?.price}
        />
        <input
          type="text"
          placeholder="Address"
          onChange={handleChange}
          name="street_address"
          value={state.listing_info?.street_address}
        />
        <input
          type="text"
          placeholder="City"
          onChange={handleChange}
          name="city"
          value={state.listing_info?.city}
        />
        <input
          type="text"
          placeholder="Zip Code"
          onChange={handleChange}
          name="zip_code"
          value={state.listing_info?.zip_code}
        />
        <input
          type="text"
          placeholder="State"
          onChange={handleChange}
          name="state"
          value={state.listing_info?.state}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={handleChange}
          name="description"
          value={state.listing_info?.description}
        />
        <input type="submit" />
      </form>

      {`Results shown ${
        (listings.length % state.post_per_page!) +
        listings.length -
        state.post_per_page!
      } of ${listings.length}`}

      {fetchListings()}

      <button onClick={goForward}>&rarr;</button> */}
    </div>
  )
}

const mapStateToProps = ({ listingReducer }: any) => ({
  listings: listingReducer,
  // user: userReducer.user,
})

export default withRouter(
  connect(mapStateToProps, { getAllListings, createListing, deleteListing })(
    Listings,
  ),
)
