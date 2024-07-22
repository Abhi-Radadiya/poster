/* eslint-disable no-prototype-builtins */
import React from "react";
import Button from "@/components/Button/Button";
import { Input } from "@/components/InputField/Input";

export default function InputForm(props) {
    const { setDetails, details = {}, id, setAddress, hasLimitAddress, handleSave } = props;

    return (
        <>
            <div className="px-6 space-y-3 mb-6 pb-3">
                <Input
                    label="Mobile Number"
                    onChange={(e) => setDetails((prevState) => ({ ...prevState, mobileNumber: e }))}
                    placeholder="Enter mobile number"
                    value={details.mobileNumber}
                    inputType="tel"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    maxLength={10}
                    action={!details.hasOwnProperty("mobileNumber2") && id > 3 && !details.hasOwnProperty("email2") && "+ Add"}
                    actionTextColor="text-blue-500"
                    handleClickAction={() => setDetails((prevState) => ({ ...prevState, mobileNumber2: "" }))}
                />

                {details.hasOwnProperty("mobileNumber2") && id > 3 && (
                    <Input
                        label="Mobile Number"
                        onChange={(e) => setDetails((prevState) => ({ ...prevState, mobileNumber2: e }))}
                        placeholder="Enter mobile number"
                        value={details?.mobileNumber2}
                        inputType="tel"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        maxLength={10}
                        action="- Remove"
                        actionTextColor="text-red-500"
                        handleClickAction={() =>
                            setDetails((prevState) => {
                                const { mobileNumber2, ...newState } = prevState;
                                return newState;
                            })
                        }
                    />
                )}

                <Input
                    label="Email"
                    inputType="email"
                    onChange={(e) => setDetails((prevState) => ({ ...prevState, email: e }))}
                    placeholder="Enter email address"
                    value={details.email}
                    action={!details.hasOwnProperty("mobileNumber2") && id > 3 && !details.hasOwnProperty("email2") && "+ Add"}
                    actionTextColor="text-blue-500"
                    handleClickAction={() => setDetails((prevState) => ({ ...prevState, email2: "" }))}
                />

                {details.hasOwnProperty("email2") && id > 3 && (
                    <Input
                        label="Email"
                        onChange={(e) => setDetails((prevState) => ({ ...prevState, email2: e }))}
                        placeholder="Enter Email"
                        value={details?.email2}
                        action="- Remove"
                        actionTextColor="text-red-500"
                        handleClickAction={() =>
                            setDetails((prevState) => {
                                const { email2, ...newState } = prevState;
                                return newState;
                            })
                        }
                    />
                )}

                <Input label="Website" onChange={(e) => setDetails((prevState) => ({ ...prevState, website: e }))} placeholder="Enter website" value={details.website} />

                <Input label="Address" boxClass="mb-1" maxLength={65} inputType="text" onChange={(e) => setAddress(e)} placeholder="Enter address" value={details.address} />

                {hasLimitAddress && <span className="text-sm text-red-600">* Please make address smaller</span>}

                <div className="pt-6">
                    <Button label="Save" onClick={handleSave} />
                </div>
            </div>
        </>
    );
}
