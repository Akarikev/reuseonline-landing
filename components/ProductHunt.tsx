/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductHunt() {
  return (
    <div className="mb-6 -mt-8">
      <Link
        href="https://www.producthunt.com/posts/reuseonline?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-reuseonline"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=418421&theme=dark"
          alt="reuseOnline - Easily&#0032;check&#0032;and&#0032;display&#0032;your&#0032;users&#0032;online&#0032;status | Product Hunt"
          width={250}
          height={54}
        />
      </Link>
    </div>
  );
}

export default ProductHunt;
