import React, { Component } from 'react'
import Link from 'next/link'
import axios from 'axios';
import Head from '../components/head'
import Nav from '../components/nav'

class AboutPage extends Component {
  async static getInitialProps () {
    const res = await axios.get('https://api.github.com/users/bvaughn/repos');

    return {
      repos: res.data.map(({ id, name, description }) => ({ id, name, description })).slice(0, 9),
    }
  }

  componentDidMount() {
    document.title = 'About Page'
  }

  render() {
    const { repos } = this.props;

    return (
      <div>
        <Head title="Home" />
        <Nav />

        <main className="hero">
          <h1 className="title">Brian Vaughn Repos</h1>

          <div className="row">
            {repos.map(repo => (
              <Link href="/" key={repo.id}>
                <a className="card">
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                </a>
              </Link>
            ))}
          </div>
        </main>

        <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
        margin-bottom: 10px;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
      </div>
    )
  }
}

// const AboutPage = ({ repos }) => {

// };

// AboutPage.getInitialProps = async () => {
//   const res = await axios.get('https://api.github.com/users/bvaughn/repos');

//   return {
//     repos: res.data.map(({ id, name, description }) => ({ id, name, description })).slice(0, 9),
//   }
// }

export default AboutPage
