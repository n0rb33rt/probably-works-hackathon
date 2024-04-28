import ReturnButton from "../components/ReturnButton.jsx";
import user from "../assets/user.png";
import {Form, redirect, useLoaderData, useNavigation} from "react-router-dom";
import Spinner from "../components/Spinner.jsx";
import {useState} from "react";

export default function ProfileSettingsPage() {
    const navigation = useNavigation();
    const loaderResult = useLoaderData();
    const [name,setName] = useState(loaderResult.name);
    const [description, setDescription] = useState(loaderResult.description);
    const [profileImageData, setProfileImageData] = useState(loaderResult.imageBase64??user);

    if (navigation.state === 'submitting') {
        return (<div className='flex justify-center items-center h-[50rem]'><Spinner/></div>)
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImageData(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };



    return (
        <div className='font-OutFit'>
            <div className="relative w-full">
                <div className="absolute top-0 left-0">
                    <ReturnButton/>
                </div>
                <div className="flex justify-center items-center">
                    <img src={profileImageData} alt="user icon" className="rounded-full w-32 h-32 cursor-pointer"
                         onClick={() => document.getElementById('file-upload').click()}/>
                    <input type="file" id="file-upload" style={{display: 'none'}} accept="image/*"
                           onChange={handleImageChange}/>
                </div>
            </div>
            <Form method='POST'>
                <input
                    hidden
                    name="imageBase64"
                    id="imageBase64"
                    value={profileImageData}
                    onChange={()=>{}}
                />
                <div className='mb-4'>
                    <label htmlFor="user_name" className="font-semibold text-[14px]">
                        Ваше ім'я*
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
                        placeholder="Наприклад, Василь Сніжок"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="user_name" className="font-semibold text-[14px]">
                        Короткий опис*
                    </label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
                        placeholder="Наприклад, Backend-розробник зі Львову, 21 рік"
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        maxLength="100"
                    />
                </div>
                <button
                    className="mt-10 bg-[#1A30A6] text-white text-[12px] font-semibold h-[60px] text-center py-5 rounded-[60px] w-full"
                >
                    Зберегти
                </button>
            </Form>
        </div>
    );
}

export async function loader() {
    const response = await fetch("https://testtmpss.azurewebsites.net/api/v1/user/info", {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
    });
    if (!response.ok) {
        throw new Response('Error fetching user data', {status: 400});
    }
    return response;
}

export async function action({request}) {
    const data = await request.formData();

    const requestData = {
        name: data.get("user_name"),
        imageBase64: data.get("imageBase64"),
        description: data.get("description"),
    };

    const response = await fetch(
        "https://testtmpss.azurewebsites.net/api/v1/user/update",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
            body: JSON.stringify(requestData),
        }
    );
    const parsedRes = await response.json();

    if (!response.ok) {
        return parsedRes;
    }

    return redirect("/profile");
}