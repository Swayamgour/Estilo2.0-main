import React from 'react'
import Image from "next/image";
import Style from '@/styles/About.module.css'
import Link from 'next/link';

export default function index() {
  // src="/About/about_logo.png"
  return (
    <div className={Style.container}>
      <div className={Style.content_Center}>
        <div className={Style.content}>
          <h1 className={Style.AboutTag}>About Us</h1>
        </div>
        <div className={Style.ImageConatener}>
          <Image
            src="/About/about_logo.png"
            alt='Logo'
            width={100}
            height={100}
            layout='responsive'
          />
          <div className={Style.textContent}>
            <p className={Style.title}>
              {/* Every business has an origin story worth telling, and usually, one that justifies why you even do business and have clients. */}
              Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges
            </p>
          </div>
        </div>
        <div className={Style.thirtcontaner}>
          <div>
            <h2 className={Style.subTitle}>
              Wide reach
            </h2>
            <p className={Style.Persanalised}>Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.</p>
          </div>
          <div>
            <h2 className={Style.subTitle}>
              Convenience
            </h2>
            <p className={Style.Persanalised}>Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.</p>
          </div>
          <div>
            <h2 className={Style.subTitle}>
              Compertitive pricing
            </h2>
            <p className={Style.Persanalised}>Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.</p>
          </div>
        </div>
      </div>
      <div className={Style.Second_About_Contaner}>
        <div className={Style.content}>
          <h1 className={Style.AboutTag}>About Us</h1>
        </div>
        <div className={Style.second_Name_About}>
          <h2>
            Estilo Bags
          </h2>
          <div className={Style.line}>
            <p>
              The bag has a whistle attached at one of the zips, which makes t very interesting. Inside the bag, there are two sections,
            </p>
            <p>
              The bag has a whistle attached at one of the zips, which makes t very interesting. Inside the bag, there are two sections,
            </p>
            <p>
              The bag has a whistle attached at one of the zips, which makes t very interesting. Inside the bag, there are two sections,
            </p>
            <p>
              The bag has a whistle attached at one of the zips, which makes t very interesting. Inside the bag, there are two sections,
            </p>
          </div>

        </div>
        <Link className={Style.AboutTag} href="/">About Estilo</Link>

      </div>

    </div>



  )
}
