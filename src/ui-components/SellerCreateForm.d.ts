/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SellerCreateFormInputValues = {
    name?: string;
    profile?: string;
    image?: string;
    taxId?: string;
    active?: boolean;
    verified?: boolean;
    phone?: string;
    email?: string;
    website?: string;
    address?: string;
    attributes?: string;
    images?: string;
    documents?: string;
    rating?: number;
    bank?: string;
    age?: number;
    gender?: string;
};
export declare type SellerCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    profile?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    taxId?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
    verified?: ValidationFunction<boolean>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    attributes?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    documents?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    bank?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    gender?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SellerCreateFormOverridesProps = {
    SellerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    profile?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    taxId?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
    verified?: PrimitiveOverrideProps<SwitchFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextAreaFieldProps>;
    attributes?: PrimitiveOverrideProps<TextAreaFieldProps>;
    images?: PrimitiveOverrideProps<TextAreaFieldProps>;
    documents?: PrimitiveOverrideProps<TextAreaFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    bank?: PrimitiveOverrideProps<TextAreaFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SellerCreateFormProps = React.PropsWithChildren<{
    overrides?: SellerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SellerCreateFormInputValues) => SellerCreateFormInputValues;
    onSuccess?: (fields: SellerCreateFormInputValues) => void;
    onError?: (fields: SellerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SellerCreateFormInputValues) => SellerCreateFormInputValues;
    onValidate?: SellerCreateFormValidationValues;
} & React.CSSProperties>;
export default function SellerCreateForm(props: SellerCreateFormProps): React.ReactElement;
