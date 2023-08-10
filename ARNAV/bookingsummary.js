import React, { useState } from 'react';



function CreateBookingForm() {
  <>
  <meta name="viewport" content="width=device-width" />
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  {/* Turn off iOS phone number autodetect */}
  <meta name="format-detection" content="telephone=no" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    body, p {\n          font-family: \'Helvetica Neue\', Helvetica,Arial, sans-serif;\n          -webkit-font-smoothing: antialiased;\n          -webkit-text-size-adjust: none;\n      }\n      table {\n          border-collapse: collapse;\n          border-spacing: 0;\n          border: 0;\n          padding: 0;\n      }\n      img {\n          margin: 0;\n          padding: 0;\n      }\n  \n      .content {\n          width: 600px;\n      }\n  \n      .no_text_resize {\n          -moz-text-size-adjust: none;\n          -webkit-text-size-adjust: none;\n          -ms-text-size-adjust: none;\n          text-size-adjust: none;\n      }\n  \n      /* Media Queries */\n      @media all and (max-width: 600px) {\n  \n          table[class="content"] {\n              width: 100% !important;\n          }\n  \n          tr[class="grid-no-gutter"] td[class="grid__col"] {\n              padding-left: 0 !important;\n              padding-right: 0 !important;\n          }\n  \n          td[class="grid__col"] {\n              padding-left: 18px !important;\n              padding-right: 18px !important;\n          }\n  \n          table[class="small_full_width"] {\n              width: 100% !important;\n              padding-bottom: 10px;\n          }\n  \n          a[class="header-link"] {\n              margin-right: 0 !important;\n              margin-left: 10px !important;\n          }\n  \n          a[class="btn"] {\n              width: 100%;\n              border-left-width: 0px !important;\n              border-right-width: 0px !important;\n          }\n  \n          table[class="col-layout"] {\n              width: 100% !important;\n          }\n  \n          td[class="col-container"] {\n              display: block !important;\n              width: 100% !important;\n              padding-left: 0 !important;\n              padding-right: 0 !important;\n          }\n  \n          td[class="col-nav-items"] {\n              display: inline-block !important;\n              padding-left: 0 !important;\n              padding-right: 10px !important;\n              background: none !important;\n          }\n  \n          img[class="col-img"] {\n              height: auto !important;\n              max-width: 520px !important;\n              width: 100% !important;\n          }\n  \n          td[class="col-center-sm"] {\n              text-align: center;\n          }\n  \n          tr[class="footer-attendee-cta"] > td[class="grid__col"] {\n              padding: 24px 0 0 !important;\n          }\n  \n          td[class="col-footer-cta"] {\n              padding-left: 0 !important;\n              padding-right: 0 !important;\n          }\n  \n          td[class="footer-links"] {\n              text-align: left !important;\n          }\n  \n          .hide-for-small {\n              display: none !important;\n          }\n  \n          .ribbon-mobile {\n              line-height: 1.3 !important;\n          }\n  \n          .small_full_width {\n              width: 100% !important;\n              padding-bottom: 10px;\n          }\n  \n          .table__ridge {\n              height: 7px !important;\n          }\n  \n          .table__ridge img {\n              display: none !important;\n          }\n  \n          .table__ridge--top {\n              background-image: url(https://cdn.evbstatic.com/s3-s3/marketing/emails/modules/ridges_top_fullx2.jpg) !important;\n              background-size: 170% 7px;\n          }\n  \n          .table__ridge--bottom {\n              background-image: url(https://cdn.evbstatic.com/s3-s3/marketing/emails/modules/ridges_bottom_fullx2.jpg) !important;\n              background-size: 170% 7px;\n          }\n  \n          .summary-table__total {\n              padding-right: 10px !important;\n          }\n  \n          .app-cta {\n              display: none !important;\n          }\n  \n          .app-cta__mobile {\n              width: 100% !important;\n              height: auto !important;\n              max-height: none !important;\n              overflow: visible !important;\n              float: none !important;\n              display: block !important;\n              margin-top: 12px !important;\n              visibility: visible;\n              font-size: inherit !important;\n          }\n  \n          /* List Event Cards */\n          .list-card__header {\n              width: 130px !important;\n          }\n  \n          .list-card__label {\n              width: 130px !important;\n          }\n  \n          .list-card__image-wrapper {\n              width: 130px !important;\n              height: 65px !important;\n          }\n  \n          .list-card__image {\n              max-width: 130px !important;\n              max-height: 65px !important;\n          }\n  \n          .list-card__body {\n              padding-left: 10px !important;\n          }\n  \n          .list-card__title {\n              margin-bottom: 10px !important;\n          }\n  \n          .list-card__date {\n              padding-top: 0 !important;\n          }\n      }\n  \n      @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:landscape) {\n          .ribbon-mobile {\n              line-height: 1.3 !important;\n          }\n  \n          .ribbon-mobile__text {\n              padding: 0 !important;\n          }\n      }\n  \n      @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {\n          .ribbon-mobile {\n              line-height: 1.3 !important;\n          }\n  \n          .ribbon-mobile__text {\n              padding: 0 !important;\n          }\n      }\n  \n      @media screen and (min-device-height:480px) and (max-device-height:568px), (min-device-width : 375px) and (max-device-width : 667px) and (-webkit-min-device-pixel-ratio : 2), (min-device-width : 414px) and (max-device-width : 736px) and (-webkit-min-device-pixel-ratio : 3) {\n  \n          .hide_for_iphone {\n              display: none !important;\n          }\n  \n          .passbook {\n              width: auto !important;\n              height: auto !important;\n              line-height: auto !important;\n              visibility: visible !important;\n              display: block !important;\n              max-height: none !important;\n              overflow: visible !important;\n              float: none !important;\n              text-indent: 0 !important;\n              font-size: inherit !important;\n          }\n      }\n  '
    }}
  />
  {/* Global container with background styles. Gmail converts BODY to DIV so we
  lose properties like BGCOLOR. */}
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    height="100%"
    width="100%"
    bgcolor="#F7F7F7"
  >
    <tbody>
      <tr>
        <td style={{ paddingRight: 10, paddingLeft: 10 }}>
          {/* Outlook Hack (doesn't support max-width property until 2013) */}
          {/*[if (gte mso 9)|(IE)]>
      <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#F7F7F7">
        <tr>
          <td>
          <![endif]*/}
          <table
            className="content"
            align="center"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            bgcolor="#F7F7F7"
            style={{ width: 600, maxWidth: 600 }}
          >
            <tbody>
              <tr>
                <td
                  width="33%"
                  valign="middle"
                  style={{ textAlign: "left", padding: "20px 0 10px 0" }}
                >
                  <a href="https://www.roomstonite.com/?utm_source=booking_email&utm_medium=email&utm_campaign=booking_email&utm_term=eb_logo">
                    <img
                      src="https://www.roomstonite.com/site-source-files/roomstonite-logo.png"
                      width={130}
                      height={76}
                      border={0}
                      alt="Roomstonite"
                      style={{ width: 130, height: 76 }}
                    />
                  </a>
                </td>
                <td
                  width="66%"
                  valign="middle"
                  style={{
                    fontFamily:
                      '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    textAlign: "right",
                    paddingTop: 12,
                    verticalAlign: "middle"
                  }}
                />
              </tr>
            </tbody>
          </table>
          {/*[if (gte mso 9)|(IE)]>
          </td>
        </tr>
      </table>
    <![endif]*/}
        </td>
      </tr>
      <tr>
        <td>
          {/*[if (gte mso 9)|(IE)]>
      <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF">
        <tr>
          <td>
          <![endif]*/}
          <table
            className="content"
            align="center"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            bgcolor="#F7F7F7"
            style={{ width: 600, maxWidth: 600 }}
          >
            <tbody>
              <tr>
                <td colSpan={2} style={{ background: "#fff", borderRadius: 8 }}>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            fontFamily:
                              '"Helvetica Neue", Helvetica, Arial, sans-serif'
                          }}
                        ></td>
                      </tr>
                      <tr className="">
                        <td
                          className="grid__col"
                          style={{
                            fontFamily:
                              '"Helvetica neue", Helvetica, arial, sans-serif',
                            padding: "32px 40px"
                          }}
                        >
                          <h2
                            style={{
                              color: "#404040",
                              fontWeight: 300,
                              margin: "0 0 12px 0",
                              fontSize: 20,
                              lineHeight: 30,
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif'
                            }}
                          >
                            Hi {"{"}
                            {"{"}User Name{"}"}
                            {"}"},
                          </h2>
                          <p
                            style={{
                              color: "#666666",
                              fontWeight: 400,
                              fontSize: 15,
                              lineHeight: 21,
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif'
                            }}
                            className=""
                          >
                            Your reservation request for {"{"}
                            {"{"}Hotel Name{"}"}
                            {"}"}, {"{"}
                            {"{"}City{"}"}
                            {"}"} has been confirmed. Please review the details
                            of your booking.
                          </p>
                          <table
                            width="100%"
                            border={2}
                            cellSpacing={0}
                            cellPadding={0}
                            style={{
                              marginTop: 12,
                              marginBottom: 12,
                              margin: "24px 0",
                              color: "#666666",
                              fontWeight: 400,
                              fontSize: 15,
                              lineHeight: 21,
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif'
                            }}
                          >
                            <tbody>
                              <tr>
                                <td
                                  style={{
                                    padding: "20px 20px 0px",
                                    fontWeight: 700,
                                    fontSize: 25
                                  }}
                                >
                                  Itinerary <br />
                                  <p
                                    style={{
                                      paddingTop: 0,
                                      fontWeight: 700,
                                      fontSize: 12
                                    }}
                                  >
                                    Booking Confirmation Code: {"{"}
                                    {"{"}BOOKING-CODE{"}"}
                                    {"}"}
                                  </p>
                                </td>
                              </tr>{" "}
                              <tr>
                                {" "}
                                <td
                                  style={{
                                    width: "100% !important",
                                    maxWidth: "480px !important",
                                    height: "auto !important"
                                  }}
                                >
                                  <a
                                    href="http://www.hoteldirect.roomstonite.com/?utm_source=email_bookings&utm_medium=cpc&utm_campaign=Azzure-Goa-Image"
                                    target="new"
                                  >
                                    <img
                                      src="https://ziprooms.s3.amazonaws.com/images/gallery/hotel-2016-02-22-12-48-1456125525.jpg"
                                      width={519}
                                      height={300}
                                      alt="Azzure by Spree"
                                      border={0}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                {" "}
                                <td
                                  style={{
                                    padding: "20px 20px 10px",
                                    fontWeight: 700,
                                    fontSize: 18
                                  }}
                                >
                                  {"{"}
                                  {"{"}Hotel-Name{"}"}
                                  {"}"}{" "}
                                  <p
                                    style={{
                                      paddingTop: 0,
                                      fontWeight: 700,
                                      fontSize: 12
                                    }}
                                  >
                                    {"{"}
                                    {"{"}Total Rooms{"}"}
                                    {"}"} {"{"}
                                    {"{"}Room Type Name{"}"}
                                    {"}"} - {"{"}
                                    {"{"}Total Guests{"}"}
                                    {"}"} Guests
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <table style={{ width: "100%" }}>
                                    <tbody>
                                      <tr>
                                        <td
                                          style={{
                                            padding: "20px 20px 0px 20px",
                                            fontWeight: 700,
                                            fontSize: 14
                                          }}
                                        >
                                          Arrive
                                        </td>
                                        <td />
                                        <td
                                          style={{
                                            padding: "20px 20px 0px 30px",
                                            fontWeight: 700,
                                            fontSize: 14
                                          }}
                                        >
                                          Depart
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={{
                                            padding: "0px 20px 20px 20px",
                                            fontWeight: 700,
                                            fontSize: 18
                                          }}
                                        >
                                          {"{"}
                                          {"{"}Arrival Date{"}"}
                                          {"}"}
                                        </td>
                                        <td>&gt;</td>
                                        <td
                                          style={{
                                            padding: "0px 20px 20px 30px",
                                            fontWeight: 700,
                                            fontSize: 18
                                          }}
                                        >
                                          {"{"}
                                          {"{"}Departure Date{"}"}
                                          {"}"}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    padding: "5px 5px 0px 20px",
                                    fontWeight: 700,
                                    fontSize: 12
                                  }}
                                >
                                  {"{"}
                                  {"{"}Full Address{"}"}
                                  {"}"}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style={{
                                    width: "100% !important",
                                    maxWidth: "480px !important",
                                    height: "auto !important"
                                  }}
                                >
                                  <a
                                    href="http://www.hoteldirect.roomstonite.com/?utm_source=email_bookings&utm_medium=cpc&utm_campaign=Azzure-Goa-Image"
                                    target="new"
                                  >
                                    <img
                                      src="https://maps.googleapis.com/maps/api/staticmap?zoom=17&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C15.538783,%2073.768424&key=AIzaSyCT8Y_pPdjXG40nYfptTC18ECyd0YPCbtc"
                                      width={519}
                                      height={300}
                                      alt="Azzure by Spree"
                                      border={0}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <table style={{ width: "100%" }}>
                                    <tbody>
                                      <tr>
                                        <td
                                          style={{
                                            padding: "20px 20px 0px 20px",
                                            fontWeight: 700,
                                            fontSize: 18
                                          }}
                                        >
                                          Total Payable
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={{
                                            padding: "20px 20px 5px 20px",
                                            fontWeight: 300,
                                            fontSize: 14
                                          }}
                                        >
                                          ₹ 2300 x 2 Rooms x 3 Nights{" "}
                                        </td>
                                        <td />
                                        <td
                                          style={{
                                            padding: "20px 20px 5px 30px",
                                            fontWeight: 300,
                                            fontSize: 14
                                          }}
                                        >
                                          ₹ 13800
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={{
                                            padding: "5px 20px 10px 20px",
                                            fontWeight: 400,
                                            fontSize: 14
                                          }}
                                        >
                                          All Applicable Taxes{" "}
                                        </td>
                                        <td />
                                        <td
                                          style={{
                                            padding: "5px 20px 10px 30px",
                                            fontWeight: 400,
                                            fontSize: 14
                                          }}
                                        >
                                          ₹ 3105
                                        </td>
                                      </tr>
                                      <tr>
                                        {" "}
                                        <td
                                          style={{
                                            padding: "5px 20px 10px 20px",
                                            fontWeight: 700,
                                            fontSize: 14,
                                            color: "#000"
                                          }}
                                        >
                                          Grand Total{" "}
                                        </td>
                                        <td />
                                        <td
                                          style={{
                                            padding: "5px 20px 10px 30px",
                                            fontWeight: 700,
                                            fontSize: 14,
                                            color: "#000"
                                          }}
                                        >
                                          ₹ 16905
                                        </td>
                                      </tr>{" "}
                                      <tr>
                                        {" "}
                                        <td
                                          style={{
                                            padding: "5px 20px 10px 20px",
                                            fontWeight: 700,
                                            fontSize: 14
                                          }}
                                        >
                                          Payment Mode{" "}
                                        </td>
                                        <td />
                                        <td
                                          style={{
                                            padding: "5px 20px 10px 30px",
                                            fontWeight: 700,
                                            fontSize: 14
                                          }}
                                        >
                                          Pay @ Hotel
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                {" "}
                                <td
                                  style={{
                                    padding: "20px 20px 10px",
                                    fontWeight: 700,
                                    fontSize: 18
                                  }}
                                >
                                  Inclusions{" "}
                                  <p
                                    style={{
                                      paddingTop: 0,
                                      fontWeight: 700,
                                      fontSize: 12
                                    }}
                                  />
                                  <ul
                                    style={{
                                      paddingTop: 0,
                                      fontWeight: 300,
                                      fontSize: 14
                                    }}
                                  >
                                    <li>
                                      All Standard Hotel and Room Amenities
                                    </li>
                                    <li>
                                      International Airport Pickup and Drop, 4
                                      Piece laundry per night
                                    </li>
                                  </ul>
                                  <p />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <table style={{ width: "100%" }}>
                                    <tbody>
                                      <tr>
                                        <td
                                          style={{
                                            padding: "20px 20px 0px 20px",
                                            fontWeight: 700,
                                            fontSize: 18
                                          }}
                                        >
                                          Guest Details
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={{
                                            padding: "20px 20px 5px 20px",
                                            fontWeight: 700,
                                            fontSize: 14
                                          }}
                                        >
                                          Room {"{"}
                                          {"{"}1{"}"}
                                          {"}"}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={{
                                            padding: "20px 20px 5px 20px",
                                            fontWeight: 300,
                                            fontSize: 14
                                          }}
                                        >
                                          Mr. Bill Gates{" "}
                                        </td>
                                        <td />
                                        <td
                                          style={{
                                            padding: "20px 20px 5px 30px",
                                            fontWeight: 300,
                                            fontSize: 14
                                          }}
                                        >
                                          +91 1234567890
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={{
                                            padding: "5px 20px 10px 20px",
                                            fontWeight: 400,
                                            fontSize: 14
                                          }}
                                        >
                                          Mrs. Melinda Gates{" "}
                                        </td>
                                        <td />
                                        <td
                                          style={{
                                            padding: "5px 20px 10px 30px",
                                            fontWeight: 400,
                                            fontSize: 14
                                          }}
                                        >
                                          +91 1234567890
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={{
                                            padding: "20px 20px 5px 20px",
                                            fontWeight: 700,
                                            fontSize: 14
                                          }}
                                        >
                                          Room {"{"}
                                          {"{"}2{"}"}
                                          {"}"}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={{
                                            padding: "20px 20px 5px 20px",
                                            fontWeight: 300,
                                            fontSize: 14
                                          }}
                                        >
                                          Mr. Mark Zuckerberg{" "}
                                        </td>
                                        <td />
                                        <td
                                          style={{
                                            padding: "20px 20px 5px 30px",
                                            fontWeight: 300,
                                            fontSize: 14
                                          }}
                                        >
                                          +91 1234567890
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style={{
                                            padding: "5px 20px 10px 20px",
                                            fontWeight: 400,
                                            fontSize: 14
                                          }}
                                        >
                                          Mrs. Priscilla Chan{" "}
                                        </td>
                                        <td />
                                        <td
                                          style={{
                                            padding: "5px 20px 10px 30px",
                                            fontWeight: 400,
                                            fontSize: 14
                                          }}
                                        >
                                          +91 1234567890
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/*   <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 12px; margin-bottom: 12px; margin: 24px 0">
                    <tr>
                      <td>
                      <table border="0" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td style="-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;">
                              <a href="#" target="_blank" style="display:inline-block; color: #fff; font-weight: 400; border-left: 15px solid; border-right: 15px solid; border-top: 12px solid; border-bottom: 12px solid; font-size: 17px; text-decoration: none; text-align: center; -webkit-text-size-adjust: none; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; font-family: 'Helvetica neue', Helvetica, arial, sans-serif; background-color: #7ad108; border-color: #7ad108;"
                                class="btn"> <span style="padding-left: 5px; padding-right: 5px;">
                          Cancel Booking
                      </span>

                              </a>
                            </td>
                          </tr>
                        </table> 
                      </td>
                    </tr>
                  </table> */}
                          <p
                            style={{
                              color: "#666666",
                              fontWeight: 400,
                              fontSize: 15,
                              lineHeight: 21,
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif'
                            }}
                            className=""
                          >
                            Hope you enjoyed the booking experience and will
                            like the stay too.
                          </p>
                          <p
                            style={{
                              color: "#666666",
                              fontWeight: 400,
                              fontSize: 17,
                              lineHeight: 24,
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif',
                              marginBottom: 6,
                              marginTop: 24
                            }}
                            className=""
                          >
                            Cheers,
                          </p>
                          <p
                            style={{
                              color: "#666666",
                              fontWeight: 400,
                              fontSize: 17,
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif',
                              marginBottom: 6,
                              marginTop: 10
                            }}
                          >
                            Hotel Direct Team
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/*[if (gte mso 9)|(IE)]>
        </td>
        </tr>
    </table>
  <![endif]*/}
          {/*[if (gte mso 9)|(IE)]>
    <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
<tr>
  <td>
  <![endif]*/}
          <table
            className="content"
            align="center"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            style={{
              width: 600,
              maxWidth: 600,
              fontFamily: "Helvetica, Arial, sans-serif"
            }}
          >
            <tbody>
              <tr>
                <td style={{ paddingTop: 24 }}>
                  <table cellSpacing={0} cellPadding={0} width="100%">
                    <tbody>
                      <tr>
                        <td
                          style={{
                            backgroundColor: "#dedede",
                            width: "100%",
                            fontSize: 1,
                            height: 1,
                            lineHeight: 1
                          }}
                        >
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="footer-nav">
                <td
                  className="grid__col"
                  style={{
                    fontFamily:
                      '"Helvetica neue", Helvetica, arial, sans-serif',
                    padding: "9px 0",
                    textAlign: "center"
                  }}
                >
                  <table
                    cellSpacing={0}
                    cellPadding={0}
                    width="100%"
                    style={{}}
                    align=""
                    className="col-layout"
                  >
                    <tbody>
                      <tr style={{}} className="">
                        <td
                          width="auto"
                          height=""
                          style={{
                            display: "inline-block",
                            padding: "9px 15px 9px 10px",
                            lineHeight: 11,
                            background:
                              'url("https://cdn.evbstatic.com/s3-s3/marketing/emails/email-footer-navigation-divider.png") no-repeat right center'
                          }}
                          align="center"
                          valign="middle"
                          className="col-nav-items"
                          colSpan={1}
                        >
                          <a
                            style={{
                              textDecoration: "none",
                              color: "#666666",
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif',
                              fontSize: 11,
                              textTransform: "uppercase"
                            }}
                            href="https://www.roomstonite.com/views/about.html/?utm_source=eb_email&utm_medium=email&utm_campaign=&utm_term=footer_about&utm_content=&ref=eemail"
                            className=""
                          >
                            About
                          </a>
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                          ></table>
                        </td>
                        <td
                          width="auto"
                          height=""
                          style={{
                            display: "inline-block",
                            padding: "9px 15px 9px 10px",
                            lineHeight: 11,
                            background:
                              'url("https://cdn.evbstatic.com/s3-s3/marketing/emails/email-footer-navigation-divider.png") no-repeat right center'
                          }}
                          align="center"
                          valign="middle"
                          className="col-nav-items"
                          colSpan={1}
                        >
                          <a
                            style={{
                              textDecoration: "none",
                              color: "#666666",
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif',
                              fontSize: 11,
                              textTransform: "uppercase"
                            }}
                            href="https://www.roomstonite.com/views/about.html/?utm_source=eb_email&utm_medium=email&utm_campaign=&utm_term=footer_help&utm_content=&ref=eemail"
                            className=""
                          >
                            Help
                          </a>
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                          ></table>
                        </td>
                        <td
                          width="auto"
                          height=""
                          style={{
                            display: "inline-block",
                            padding: "9px 15px 9px 10px",
                            lineHeight: 11,
                            background:
                              'url("https://cdn.evbstatic.com/s3-s3/marketing/emails/email-footer-navigation-divider.png") no-repeat right center'
                          }}
                          align="center"
                          valign="middle"
                          className="col-nav-items"
                          colSpan={1}
                        >
                          <a
                            style={{
                              textDecoration: "none",
                              color: "#666666",
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif',
                              fontSize: 11,
                              textTransform: "uppercase"
                            }}
                            href="https://www.roomstonite.com/views/about.html/?utm_source=eb_email&utm_medium=email&utm_campaign=&utm_term=footer_myaccount&utm_content=&ref=eemail"
                            className=""
                          >
                            My Account
                          </a>
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                          ></table>
                        </td>
                        <td
                          width="auto"
                          height=""
                          style={{
                            display: "inline-block",
                            padding: "9px 15px 9px 10px",
                            lineHeight: 11,
                            background:
                              'url("https://cdn.evbstatic.com/s3-s3/marketing/emails/email-footer-navigation-divider.png") no-repeat right center'
                          }}
                          align="center"
                          valign="middle"
                          className="col-nav-items"
                          colSpan={1}
                        >
                          <a
                            style={{
                              textDecoration: "none",
                              color: "#666666",
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif',
                              fontSize: 11,
                              textTransform: "uppercase"
                            }}
                            href="https://www.roomstonite.com/views/about.html/?utm_source=eb_email&utm_medium=email&utm_campaign=&utm_term=footer_contactus&utm_content=&ref=eemail"
                            className=""
                          >
                            Contact Us
                          </a>
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                          ></table>
                        </td>
                        <td
                          width="auto"
                          height=""
                          style={{
                            display: "inline-block",
                            padding: "9px 15px 9px 10px",
                            lineHeight: 11,
                            background:
                              'url("https://cdn.evbstatic.com/s3-s3/marketing/emails/email-footer-navigation-divider.png") no-repeat right center'
                          }}
                          align="center"
                          valign="middle"
                          className="col-nav-items"
                          colSpan={1}
                        >
                          <a
                            style={{
                              textDecoration: "none",
                              color: "#666666",
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif',
                              fontSize: 11,
                              textTransform: "uppercase"
                            }}
                            href="https://www.roomstonite.com/views/about.html/?utm_source=eb_email&utm_medium=email&utm_campaign=&utm_term=footer_privacy_policy&utm_content=&ref=eemail"
                            className=""
                          >
                            Privacy
                          </a>
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                          ></table>
                        </td>
                        <td
                          width="auto"
                          height=""
                          style={{
                            display: "inline-block",
                            padding: "9px 15px 9px 10px",
                            lineHeight: 11,
                            background:
                              'url("https://cdn.evbstatic.com/s3-s3/marketing/emails/email-footer-navigation-divider.png") no-repeat right center'
                          }}
                          align="center"
                          valign="middle"
                          className="col-nav-items"
                          colSpan={1}
                        >
                          <a
                            style={{
                              textDecoration: "none",
                              color: "#666666",
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif',
                              fontSize: 11,
                              textTransform: "uppercase"
                            }}
                            href="https://www.roomstonite.com/views/about.html/?utm_source=eb_email&utm_medium=email&utm_campaign=&utm_term=footer_tos&utm_content=&ref=eemail"
                            className=""
                          >
                            Terms
                          </a>
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                          ></table>
                        </td>
                        <td
                          width="auto"
                          height=""
                          style={{
                            display: "inline-block",
                            padding: "9px 15px 9px 10px",
                            lineHeight: 11,
                            background:
                              'url("https://cdn.evbstatic.com/s3-s3/marketing/emails/email-footer-navigation-divider.png") no-repeat right center'
                          }}
                          align="center"
                          valign="middle"
                          className="col-nav-items"
                          colSpan={1}
                        >
                          <a
                            style={{
                              textDecoration: "none",
                              color: "#666666",
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif',
                              fontSize: 11,
                              textTransform: "uppercase"
                            }}
                            href="https://www.roomstonite.com/views/about.html/?utm_source=eb_email&utm_medium=email&utm_campaign=&utm_term=footer_blog&utm_content=&ref=eemail"
                            className=""
                          >
                            Blog
                          </a>
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                          ></table>
                        </td>
                        <td
                          width="auto"
                          height=""
                          style={{
                            display: "inline-block",
                            lineHeight: 11,
                            paddingLeft: 10
                          }}
                          align="center"
                          valign="middle"
                          className="col-nav-items"
                          colSpan={1}
                        >
                          <a
                            style={{
                              textDecoration: "none",
                              color: "#0f90ba",
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif',
                              display: "inline-block",
                              height: 22,
                              verticalAlign: "middle",
                              marginLeft: 5
                            }}
                            href="https://www.facebook.com/roomstonite"
                            className=""
                          >
                            <img
                              src="https://cdn.evbstatic.com/s3-s3/marketing/emails/images/icons/facebook.png"
                              title="Facebook"
                              alt="Facebook"
                              style={{}}
                              border={0}
                              width={22}
                              height={22}
                              className=""
                            />
                          </a>
                          <a
                            style={{
                              textDecoration: "none",
                              color: "#0f90ba",
                              fontFamily:
                                '"Helvetica neue", Helvetica, arial, sans-serif',
                              display: "inline-block",
                              height: 22,
                              verticalAlign: "middle",
                              marginLeft: 5
                            }}
                            href="https://twitter.com/roomstonite"
                            className=""
                          >
                            <img
                              src="https://cdn.evbstatic.com/s3-s3/marketing/emails/images/icons/twitter.png"
                              title="Twitter"
                              alt="Twitter"
                              style={{}}
                              border={0}
                              width={22}
                              height={22}
                              className=""
                            />
                          </a>
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                          ></table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table cellSpacing={0} cellPadding={0} width="100%">
                    <tbody>
                      <tr>
                        <td
                          style={{
                            backgroundColor: "#dedede",
                            width: "100%",
                            fontSize: 1,
                            height: 1,
                            lineHeight: 1
                          }}
                        >
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="">
                <td
                  className="grid__col"
                  style={{
                    fontFamily:
                      '"Helvetica neue", Helvetica, arial, sans-serif',
                    padding: "24px 0",
                    textAlign: "center"
                  }}
                >
                  <div
                    style={{
                      color: "#666666",
                      fontWeight: 300,
                      fontSize: 13,
                      lineHeight: 18,
                      fontFamily:
                        '"Helvetica neue", Helvetica, arial, sans-serif',
                      paddingBottom: 6
                    }}
                    className=""
                  >
                    <span style={{}} className="">
                      This email was sent to
                      <a
                        style={{
                          textDecoration: "none",
                          color: "#0f90ba",
                          fontFamily:
                            '"Helvetica neue", Helvetica, arial, sans-serif'
                        }}
                        href="mailto:"
                        className=""
                      >
                        xxxxxxx@xxxxx.xxx
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      color: "#666666",
                      fontWeight: 300,
                      fontSize: 13,
                      lineHeight: 18,
                      fontFamily:
                        '"Helvetica neue", Helvetica, arial, sans-serif',
                      paddingBottom: 6
                    }}
                    className=""
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        color: "#0f90ba",
                        fontFamily:
                          '"Helvetica neue", Helvetica, arial, sans-serif'
                      }}
                      href="https://www.roomstonite.com/"
                      className=""
                    >
                      Roomstonite
                    </a>{" "}
                    | #490 RT Nagar Main Road | Bangalore | India
                  </div>
                  <div
                    style={{
                      color: "#666666",
                      fontWeight: 300,
                      fontSize: 13,
                      lineHeight: 18,
                      fontFamily:
                        '"Helvetica neue", Helvetica, arial, sans-serif'
                    }}
                    className=""
                  >
                    Copyright © 2016 Roomstonite. All rights reserved.
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          {/*[if (gte mso 9)|(IE)]>
  </td>
</tr>
    </table>
  <![endif]*/}
        </td>
      </tr>
    </tbody>
  </table>
</>
}
export default CreateBookingForm;
