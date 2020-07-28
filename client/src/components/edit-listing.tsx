import React, { useState, useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { connect, RootStateOrAny } from 'react-redux'
import axios from '../axios'
import { updateListing } from '../redux/modules/listing'

export interface MatchProps extends RouteComponentProps<{ id: string }> {}

export interface ListingProps {
  street_address?: string
  city?: string
  zip_code?: string
  state?: string
  image_url?: string
  home_type?: string
  price?: string
  description?: string
}

const EditListing: React.FC<ListingProps & MatchProps> = ({
  match,
  history,
}) => {
  const [state, setState] = useState<ListingProps>()

  const grabListings = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // console.log(childrexn)
    await updateListing(state)
    await history.push('/listings')
  }

  useEffect(() => {
    console.log(match)
    axios.get(`/listings/${match.params.id}`).then((context) => {
      console.log({ prev: context.data })
      setState(context.data)
    })
  }, [match])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ [event.currentTarget.name]: event.currentTarget.value })
  }

  return (
    <div>
      <h1>EditListing</h1>
      <form onSubmit={grabListings}>
        <input
          type="text"
          placeholder="Type"
          onChange={handleChange}
          value={state?.home_type}
          name="home-type"
        />
        <input
          type="text"
          placeholder="Amount"
          onChange={handleChange}
          value={state?.price}
          name="price"
        />
        <input
          type="text"
          placeholder="Address"
          onChange={handleChange}
          value={state?.street_address}
          name="street_address"
        />
        <input
          type="text"
          placeholder="City"
          onChange={handleChange}
          value={state?.city}
          name="city"
        />
        <input
          type="text"
          placeholder="Zip Code"
          onChange={handleChange}
          value={state?.zip_code}
          name="zip_code"
        />
        <input
          type="text"
          placeholder="State"
          onChange={handleChange}
          value={state?.state}
          name="state"
        />
        <input
          type="text"
          placeholder="Description"
          onChange={handleChange}
          value={state?.description}
          name="description"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
  // }
}

interface StateProps {
  listings: ListingProps
}

interface DispatchProps {
  updateListing: () => { updateListing: any }
}

const mapStateToProps = (stateProps: RootStateOrAny) => ({
  listings: stateProps.listings,
})

export default withRouter(
  connect<StateProps, ListingProps, DispatchProps>(mapStateToProps)(
    EditListing,
  ),
)
