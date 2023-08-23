"use server";

import mailchimp from "@mailchimp/mailchimp_marketing";

if (!process.env.MAILCHIMP_API_KEY) {
  throw new Error("MAILCHIMP_API_KEY environment variable is not set");
}

if (!process.env.MAILCHIMP_SERVER) {
  throw new Error("MAILCHIMP_SERVER environment variable is not set");
}

if (!process.env.MAILCHIMP_LIST_ID) {
  throw new Error("MAILCHIP_LIST_ID environment variable is not set");
}

const apiKey = process.env.MAILCHIMP_API_KEY;
const server = process.env.MAILCHIMP_SERVER;
const listId = process.env.MAILCHIMP_LIST_ID;

// Configure mailchimp.
mailchimp.setConfig({ apiKey, server });

const getListMember = async (email: string) => {
  const listMember = (await mailchimp.lists.getListMember(
    listId,
    email.toLowerCase()
  )) as mailchimp.lists.MembersSuccessResponse;

  if (listMember.status === "subscribed") {
    return listMember;
  }
};

const updateListMember = async (email: string, name: string) => {
  await mailchimp.lists.updateListMember(listId, email.toLowerCase(), {
    email_address: email.toLowerCase(),
    merge_fields: {
      FNAME: name.split(" ")[0],
      LNAME: name.split(" ")[1],
    },
    status: "subscribed",
  });
};

const addListMember = async (email: string, name: string) => {
  await mailchimp.lists.addListMember("726ba4d267", {
    email_address: email.toLowerCase(),
    merge_fields: {
      FNAME: name.split(" ")[0],
      LNAME: name.split(" ")[1],
    },
    status: "subscribed",
  });
  return { message: "Thank you for subscribing!" };
};

export const subscribe = async (data: FormData) => {
  const email = data.get("email") as string;
  const name = data.get("name") as string;

  try {
    const listMember = await getListMember(email);

    if (listMember) {
      await updateListMember(email, name);
      return {
        message:
          "You're already subscribed, your profile has been updated. Thank you!",
      };
    }

    await addListMember(email, name);
    return { message: "Thank you for subscribing!" };
  } catch (error) {
    console.log(error);
    return { message: "An unexpected error occurred. Please try again later." };
  }
};
