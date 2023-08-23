"use server";
import Stripe from "stripe";

export const register = async (data: FormData) => {
  return { name: data.get("firstName") };
  // const stripe = new Stripe(
  //   "sk_test_51NhmUKCAL8VGLCyl2vdkc0prYyNLXP07dMsFFwGPM2UgQg3hj0NP75QoxY3SAj8WodI4RtWp4NbSKuwZ6V90kM8H00p59FDFNY",
  //   {
  //     apiVersion: "2023-08-16",
  //   }
  // );

  // let customer;

  // try {
  //   customer = await stripe.customers.create({
  //     name: `${data.get("firstName")} ${data.get("lastName")}`,
  //     email: data.get("email") as string,
  //     phone: data.get("phone") as string,
  //     metadata: {
  //       "first name": data.get("firstName") as string,
  //       "last name": data.get("lastName") as string,
  //       company: data.get("company") as string,
  //       title: data.get("title") as string,
  //       "info and interests": data.get("info") as string,
  //       line1: data.get("line1") as string,
  //       line2: data.get("line2") as string,
  //       city: data.get("city") as string,
  //       state: data.get("state") as string,
  //       postal_code: data.get("zip") as string,
  //       country: data.get("country") as string,
  //       phone: data.get("phone") as string,
  //     },
  //     shipping: {
  //       name: `${data.get("firstName")} ${data.get("lastName")}`,
  //       address: {
  //         city: data.get("city") as string,
  //         country: data.get("country") as string,
  //         line1: data.get("line1") as string,
  //         line2: data.get("line2") as string,
  //         postal_code: data.get("zip") as string,
  //       },
  //     },
  //   });
  // } catch (error) {
  //   return { error: "error creating customer" };
  // }

  // let invoiceItem;

  // try {
  //   invoiceItem = stripe.invoiceItems.create({
  //     amount: 400000,
  //     currency: "usd",
  //     customer: customer.id,
  //     description: "LIFE ITSELF 2022 Registration",
  //     discountable: true,
  //   });
  // } catch (error) {
  //   return { error: "error creating invoice item" };
  // }

  // let invoice;

  // try {
  //   invoice = stripe.invoices.create({
  //     customer: customer.id,
  //     auto_advance: false,
  //     description: "We look forward to seeing you at LIFE ITSELF!",
  //     footer: "",
  //     collection_method: "charge_automatically",
  //     metadata: {
  //       "first name": "",
  //       "last name": "",
  //       company: "",
  //       title: "",
  //       "info and interests": "",
  //       line1: "",
  //       line2: "",
  //       city: "",
  //       state: "",
  //       postal_code: "",
  //       country: "",
  //       phone: "",
  //     },
  //   });
  // } catch (error) {
  //   return { error: "error creating invoice" };
  // }
};
