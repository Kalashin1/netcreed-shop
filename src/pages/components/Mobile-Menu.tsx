import React from 'react';

const MobileMenu = () => {
  return (
    <div className="mobile-menu-container mobile-menu-light">
      <div className="mobile-menu-wrapper">
        <span className="mobile-menu-close">
          <i className="icon-close" />
        </span>

        <form action="#" method="get" className="mobile-search">
          <label htmlFor="mobile-search" className="sr-only">
            Search
          </label>
          <input
            type="search"
            className="form-control"
            name="mobile-search"
            id="mobile-search"
            placeholder="Search in..."
            required
          />
          <button className="btn btn-primary" type="submit">
            <i className="icon-search" />
          </button>
        </form>

        <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="mobile-menu-link"
              data-toggle="tab"
              href="#mobile-menu-tab"
              role="tab"
              aria-controls="mobile-menu-tab"
              aria-selected="true"
            >
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="mobile-cats-link"
              data-toggle="tab"
              href="#mobile-cats-tab"
              role="tab"
              aria-controls="mobile-cats-tab"
              aria-selected="false"
            >
              Categories
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="mobile-menu-tab"
            role="tabpanel"
            aria-labelledby="mobile-menu-link"
          >
            <nav className="mobile-nav">
              <ul className="mobile-menu">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="category.html">Shop</a>
                  <ul>
                    <li>
                      <a href="category-list.html">Smart Phones</a>
                    </li>
                    <li>
                      <a href="category-2cols.html">Televisions</a>
                    </li>
                    <li>
                      <a href="category.html">Laptops</a>
                    </li>
                    <li>
                      <a href="category-4cols.html">Desktops</a>
                    </li>
                    <li>
                      <a href="category-boxed.html">
                        <span>
                          CPU
                          <span className="tip tip-hot">Hot</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="category-fullwidth.html">
                        Storage
                      </a>
                    </li>
                    <li>
                      <a href="product-category-boxed.html">
                        Sounds & Speakers
                      </a>
                    </li>
                    <li>
                      <a href="product-category-fullwidth.html">
                        <span>
                          Keyboards
                          <span className="tip tip-new">New</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="!#">Look book</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="product.html" className="sf-with-ul">
                    Brands
                  </a>
                  <ul>
                    <li>
                      <a href="product.html">Apple</a>
                    </li>
                    <li>
                      <a href="product-centered.html">Samsung</a>
                    </li>
                    <li>
                      <a href="product-extended.html">
                        <span>
                          Xoami<span className="tip tip-new">New</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="product-gallery.html">Huawei</a>
                    </li>
                    <li>
                      <a href="product-sticky.html">Lenovo</a>
                    </li>
                    <li>
                      <a href="product-sidebar.html">HP</a>
                    </li>
                    <li>
                      <a href="product-fullwidth.html">Dell</a>
                    </li>
                    <li>
                      <a href="product-masonry.html">Google</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="!#">Televisions</a>
                  <ul>
                    <li>
                      <a href="about.html">Samsung</a>

                      <ul>
                        <li>
                          <a href="about.html">LG</a>
                        </li>
                        <li>
                          <a href="about-2.html">Toshiba</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Panasonic</a>

                      <ul>
                        <li>
                          <a href="contact.html">Apple</a>
                        </li>
                        <li>
                          <a href="contact-2.html">Hi-sense</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="blog.html">Profile</a>

                  <ul>
                    <li>
                      <a href="blog.html">Orders</a>
                    </li>
                    <li>
                      <a href="blog-listing.html">Listing</a>
                    </li>
                    <li>
                      <a href="!#">Grid</a>
                      <ul>
                        <li>
                          <a href="blog-grid-2cols.html">Grid 2 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-3cols.html">Grid 3 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-4cols.html">Grid 4 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-sidebar.html">Grid sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="!#">Masonry</a>
                      <ul>
                        <li>
                          <a href="blog-masonry-2cols.html">
                            Masonry 2 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-3cols.html">
                            Masonry 3 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-4cols.html">
                            Masonry 4 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-sidebar.html">
                            Masonry sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="!#">Mask</a>
                      <ul>
                        <li>
                          <a href="blog-mask-grid.html">Blog mask grid</a>
                        </li>
                        <li>
                          <a href="blog-mask-masonry.html">Blog mask masonry</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="!#">Single Post</a>
                      <ul>
                        <li>
                          <a href="single.html">Default with sidebar</a>
                        </li>
                        <li>
                          <a href="single-fullwidth.html">
                            Full width no sidebar
                          </a>
                        </li>
                        <li>
                          <a href="single-fullwidth-sidebar.html">
                            Full width with sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="elements-list.html">Elements</a>
                  <ul>
                    <li>
                      <a href="elements-products.html">Products</a>
                    </li>
                    <li>
                      <a href="elements-typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="elements-titles.html">Titles</a>
                    </li>
                    <li>
                      <a href="elements-banners.html">Banners</a>
                    </li>
                    <li>
                      <a href="elements-product-category.html">
                        Product Category
                      </a>
                    </li>
                    <li>
                      <a href="elements-video-banners.html">Video Banners</a>
                    </li>
                    <li>
                      <a href="elements-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="elements-accordions.html">Accordions</a>
                    </li>
                    <li>
                      <a href="elements-tabs.html">Tabs</a>
                    </li>
                    <li>
                      <a href="elements-testimonials.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="elements-blog-posts.html">Blog Posts</a>
                    </li>
                    <li>
                      <a href="elements-portfolio.html">Portfolio</a>
                    </li>
                    <li>
                      <a href="elements-cta.html">Call to Action</a>
                    </li>
                    <li>
                      <a href="elements-icon-boxes.html">Icon Boxes</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="tab-pane fade"
            id="mobile-cats-tab"
            role="tabpanel"
            aria-labelledby="mobile-cats-link"
          >
            <nav className="mobile-cats-nav">
              <ul className="mobile-cats-menu">
                <li>
                  <a className="mobile-cats-lead" href="!#">
                    Daily offers
                  </a>
                </li>
                <li>
                  <a className="mobile-cats-lead" href="!#">
                    Gift Ideas
                  </a>
                </li>
                <li>
                  <a href="!#">Beds</a>
                </li>
                <li>
                  <a href="!#">Lighting</a>
                </li>
                <li>
                  <a href="!#">Sofas & Sleeper sofas</a>
                </li>
                <li>
                  <a href="!#">Storage</a>
                </li>
                <li>
                  <a href="!#">Armchairs & Chaises</a>
                </li>
                <li>
                  <a href="!#">Decoration </a>
                </li>
                <li>
                  <a href="!#">Kitchen Cabinets</a>
                </li>
                <li>
                  <a href="!#">Coffee & Tables</a>
                </li>
                <li>
                  <a href="!#">Outdoor Furniture </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="social-icons">
          <a href="!#" className="social-icon" target="_blank" title="Facebook">
            <i className="icon-facebook-f" />
          </a>
          <a href="!#" className="social-icon" target="_blank" title="Twitter">
            <i className="icon-twitter" />
          </a>
          <a
            href="!#"
            className="social-icon"
            target="_blank"
            title="Instagram"
          >
            <i className="icon-instagram" />
          </a>
          <a href="!#" className="social-icon" target="_blank" title="Youtube">
            <i className="icon-youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
