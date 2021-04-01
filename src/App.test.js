import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/navbar/Navbar'
import HomePage from './components/layout/home/HomePage'
import NewLeaseOffersPage from './components/layout/leasing/newlease/NewLeaseOfferPage'
import { ToastMessage } from 'rimble-ui';

test('renders Get started homepage', () => {
  const { getByText } = render(<BrowserRouter><HomePage></HomePage></BrowserRouter>);
  const linkElement = getByText(/Get Started/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Get started homepage', () => {
  const { getByText } = render(<BrowserRouter><HomePage></HomePage></BrowserRouter>);
  const linkElement = getByText(/Get Started/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Lending option on homepage', () => {
  const { getByText } = render(<BrowserRouter><HomePage></HomePage></BrowserRouter>);
  const linkElement = getByText(/Lend my NFT/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Borrowing option on homepage', () => {
  const { getByText } = render(<BrowserRouter><HomePage></HomePage></BrowserRouter>);
  const linkElement = getByText(/Borrow NFT/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Navigation Bar title', () => {
  const { getByText } = render(<BrowserRouter><Navbar/></BrowserRouter>);
  const linkElement = getByText(/NFT Borrowing/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Navigation Bar Leasing Link', () => {
  const { getByText } = render(<BrowserRouter><Navbar/></BrowserRouter>);
  const linkElement = getByText(/Leasing/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Navigation Bar Lending Link', () => {
  const { getByText } = render(<BrowserRouter><Navbar/></BrowserRouter>);
  const linkElement = getByText(/Lending/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Lending Sub menu1', () => {
  const { getByText } = render(<BrowserRouter><Navbar/></BrowserRouter>);
  const linkElement = getByText(/New Loan Request/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Lending Sub menu2', () => {
  const { getByText } = render(<BrowserRouter><Navbar/></BrowserRouter>);
  const linkElement = getByText(/My Loan Requests/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Lending Sub menu3', () => {
  const { getByText } = render(<BrowserRouter><Navbar/></BrowserRouter>);
  const linkElement = getByText(/All Loan Requests/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Leasing Sub menu1', () => {
  const { getByText } = render(<BrowserRouter><Navbar/></BrowserRouter>);
  const linkElement = getByText(/New Lease Offer/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Leasing Sub menu2', () => {
  const { getByText } = render(<BrowserRouter><Navbar/></BrowserRouter>);
  const linkElement = getByText(/My Lease Offers/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Leasing Sub menu3', () => {
  const { getByText } = render(<BrowserRouter><Navbar/></BrowserRouter>);
  const linkElement = getByText(/All Lease Offers/i);
  expect(linkElement).toBeInTheDocument();
});

