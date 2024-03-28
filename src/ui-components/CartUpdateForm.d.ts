/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Cart } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CartUpdateFormInputValues = {
    items?: string;
    subTotal?: number;
    taxTotal?: number;
    deliveryTotal?: number;
    total?: number;
    pickupAddress?: string;
    billingAddress?: string;
    deliveryAddress?: string;
    lock?: boolean;
};
export declare type CartUpdateFormValidationValues = {
    items?: ValidationFunction<string>;
    subTotal?: ValidationFunction<number>;
    taxTotal?: ValidationFunction<number>;
    deliveryTotal?: ValidationFunction<number>;
    total?: ValidationFunction<number>;
    pickupAddress?: ValidationFunction<string>;
    billingAddress?: ValidationFunction<string>;
    deliveryAddress?: ValidationFunction<string>;
    lock?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartUpdateFormOverridesProps = {
    CartUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    items?: PrimitiveOverrideProps<TextAreaFieldProps>;
    subTotal?: PrimitiveOverrideProps<TextFieldProps>;
    taxTotal?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryTotal?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
    pickupAddress?: PrimitiveOverrideProps<TextAreaFieldProps>;
    billingAddress?: PrimitiveOverrideProps<TextAreaFieldProps>;
    deliveryAddress?: PrimitiveOverrideProps<TextAreaFieldProps>;
    lock?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CartUpdateFormProps = React.PropsWithChildren<{
    overrides?: CartUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cart?: Cart;
    onSubmit?: (fields: CartUpdateFormInputValues) => CartUpdateFormInputValues;
    onSuccess?: (fields: CartUpdateFormInputValues) => void;
    onError?: (fields: CartUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CartUpdateFormInputValues) => CartUpdateFormInputValues;
    onValidate?: CartUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CartUpdateForm(props: CartUpdateFormProps): React.ReactElement;
