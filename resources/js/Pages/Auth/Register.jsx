import { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [warnings, setWarnings] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const validateFields = () => {
        let valid = true;

        // Validate Name
        if (!data.name) {
            setWarnings((prev) => ({ ...prev, name: "Name is required." }));
            valid = false;
        } else {
            setWarnings((prev) => ({ ...prev, name: "" }));
        }

        // Validate Email
        if (!data.email) {
            setWarnings((prev) => ({ ...prev, email: "Email is required." }));
            valid = false;
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
            setWarnings((prev) => ({
                ...prev,
                email: "Invalid email format.",
            }));
            valid = false;
        } else {
            setWarnings((prev) => ({ ...prev, email: "" }));
        }

        // Validate Password
        if (!data.password) {
            setWarnings((prev) => ({
                ...prev,
                password: "Password is required.",
            }));
            valid = false;
        } else if (data.password.length < 8) {
            setWarnings((prev) => ({
                ...prev,
                password: "Password must be at least 8 characters.",
            }));
            valid = false;
        } else {
            setWarnings((prev) => ({ ...prev, password: "" }));
        }

        // Validate Password Confirmation
        if (!data.password_confirmation) {
            setWarnings((prev) => ({
                ...prev,
                password_confirmation: "Password confirmation is required.",
            }));
            valid = false;
        } else if (data.password_confirmation !== data.password) {
            setWarnings((prev) => ({
                ...prev,
                password_confirmation: "Passwords do not match.",
            }));
            valid = false;
        } else {
            setWarnings((prev) => ({ ...prev, password_confirmation: "" }));
        }

        return valid;
    };

    const submit = (e) => {
        e.preventDefault();

        if (validateFields()) {
            post(route("register"), {
                onFinish: () => reset("password", "password_confirmation"),
            });
        }
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} noValidate>
                {/* Name Field */}
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className={`mt-1 block w-full ${
                            warnings.name ? "border-red-500" : ""
                        }`}
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                    <InputError
                        message={warnings.name || errors.name}
                        className="mt-2"
                    />
                </div>

                {/* Email Field */}
                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className={`mt-1 block w-full ${
                            warnings.email ? "border-red-500" : ""
                        }`}
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    <InputError
                        message={warnings.email || errors.email}
                        className="mt-2"
                    />
                </div>

                {/* Password Field */}
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className={`mt-1 block w-full ${
                            warnings.password ? "border-red-500" : ""
                        }`}
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />
                    <InputError
                        message={warnings.password || errors.password}
                        className="mt-2"
                    />
                </div>

                {/* Password Confirmation Field */}
                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className={`mt-1 block w-full ${
                            warnings.password_confirmation
                                ? "border-red-500"
                                : ""
                        }`}
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />
                    <InputError
                        message={
                            warnings.password_confirmation ||
                            errors.password_confirmation
                        }
                        className="mt-2"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton
                        className="ms-4 bg-gradient-to-r from-green-500 to-teal-600"
                        disabled={processing}
                    >
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
