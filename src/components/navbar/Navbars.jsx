import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import Fuse from 'fuse.js';
import { FaBell } from 'react-icons/fa';
import Dropdowns from '../dropdown/Dropdowns';
import { Link } from "react-router";
import { AppContext } from '../../store/AppProvider.jsx';
import { clearSearchShows, fetchGenres, searchShows } from '../../store/actions/shows.js';
import { getGenres } from '../../shared/services/shows.js';
import { useQuery } from '@tanstack/react-query';
import '../../styles/Navbars.css';

const Navbars = () => {
  const appCtx = useContext(AppContext);
  const { shows } = appCtx;
  const { isPending: isGenreLoading, error: genreError, data: genres } = useQuery({

    queryFn: getGenres,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (genres) {
      fetchGenres([...genres?.genres.slice(0, 4)], shows.dispatch);
    }
  }, [genres]);


  const handleSearch = (e) => {
    const value = e.target.value.trim();
    if (!value) {
      clearSearchShows(shows.dispatch);
      return;
    }
    const fuseMovieOptions = {
      includeScore: true,
      threshold: 0.4,
      keys: ['title'],
    };
    // const fuseTvShowsOptions = {
    //   includeScore: true,
    //   threshold: 0.4,
    //   keys: ['original_name'],
    // };
    let fuseMovieInstance;
    if (shows?.state?.isSearch) {
      fuseMovieInstance = new Fuse([...shows?.state?.searchData.movies], fuseMovieOptions)
    } else {
      const mergedMovies = shows?.state?.movies.flatMap(ele => ele.results);
      const uniqueMovies = Array.from(
        new Map(mergedMovies.map(movie => [movie.id, movie])).values()
      );
      fuseMovieInstance = new Fuse([...uniqueMovies], fuseMovieOptions)
    }
    // const fuseTvshowsInstance = new Fuse([...shows.state.tvShows.results], fuseTvShowsOptions);
    const searchMovieResults = [...fuseMovieInstance.search(value).map(result => result.item)];
    // const searchTvShowsResults = [...fuseTvshowsInstance.search(value).map(result => result.item)];
    searchShows(searchMovieResults, shows.dispatch);
  };

  return (
    <>
      <Navbar expand="lg" className="netflix-navbar fixed-top" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#" className="text-danger fw-bold">
            <Link to='/' className="text-danger fw-bold">
                    CAGEFLIX
                  </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-responsive" />
          <Navbar.Offcanvas
            id="navbar-responsive"
            aria-labelledby="navbar-label"
            placement="end"
            className="bg-black"
          >
            <Offcanvas.Header closeButton className="text-white border-bottom border-secondary">
              <Offcanvas.Title id="navbar-label" className="text-danger fw-bold">
          
                <Link to='/' className="nav-link text-danger fw-bold">
                    CAGEFLIX
                  </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="navbar-left d-flex align-items-center gap-3 flex-grow-1">
                <Nav className="me-auto d-flex align-items-center gap-2">

                  <Link to='/' className="nav-link">
                    Home
                  </Link>

                  <Nav.Link href="#" className="nav-link">
                    <Dropdowns data={genres} />
                  </Nav.Link>
                </Nav>
              </div>
              <div className="navbar-right d-flex align-items-center gap-3 justify-content-end flex-shrink-0 position-relative">
                <input
                  className="search-box"
                  type="text"
                  placeholder="Search..."
                  aria-label="Search"
                  // value={searchTerm}
                  onChange={handleSearch}
                />
                <FaBell className="text-white cursor-pointer position-relative" style={{ fontSize: '1.2rem' }}>
                  <span className="notification-badge">3</span>
                </FaBell>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
