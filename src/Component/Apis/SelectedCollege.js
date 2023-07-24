import { toast } from "react-hot-toast";

const url = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMGUPLOADKEY
}`;
export const SelectedCollege = (data, closeModal) => {
  console.log(data);
//   const image = data.image[0];
//   console.log(image);
//   const formData = new FormData();
//   formData.append("image", image);
//   fetch(url, {
//     method: "POST",
//     body: formData,
//   })
    // .then((res) => res.json())
    // .then((imageResponse) => {
    //   // console.log(imageResponse.data.display_url);
    //   const photo = imageResponse?.data?.display_url;
    //   data.photo = photo;
    //   // console.log(data);

    //   fetch(`${import.meta.env.VITE_LOCALHOST_KEY}/my-college`, {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if (data.insertedId) {
    //         toast.success("Select One College");
    //         closeModal();
    //         localStorage.setItem(data._id)
    //       }
    //     });
    // });
};
