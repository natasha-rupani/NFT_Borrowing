import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeCard = () => {
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card indigo lighten-1 center-align">
          <div className="card-content white-text">
            <span className="card-title white-text">Get Started</span>
            <br/>
            <p>
              You can either put up your NFT for Lending or
              Borrow existing NFTs if you are willing to pay the price!
            </p>
            <br/>
          </div>
          <div className="card-action">
            <NavLink to='/newlease' className="amber-text text-lighten-2">Lend my NFT</NavLink>
          </div>
          <div className="card-action">
            <NavLink to='/newloan' className="amber-text text-lighten-2">Borrow NFT</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCard;
