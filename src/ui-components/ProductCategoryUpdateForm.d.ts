/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ProductCategory } from "../API.ts";
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
export declare type ProductCategoryUpdateFormInputValues = {
    productType?: string;
    name?: string;
    image?: string;
    active?: boolean;
    sort?: number;
};
export declare type ProductCategoryUpdateFormValidationValues = {
    productType?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCategoryUpdateFormOverridesProps = {
    ProductCategoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    productType?: PrimitiveOverrideProps<SelectFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductCategoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductCategoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    productCategory?: ProductCategory;
    onSubmit?: (fields: ProductCategoryUpdateFormInputValues) => ProductCategoryUpdateFormInputValues;
    onSuccess?: (fields: ProductCategoryUpdateFormInputValues) => void;
    onError?: (fields: ProductCategoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductCategoryUpdateFormInputValues) => ProductCategoryUpdateFormInputValues;
    onValidate?: ProductCategoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductCategoryUpdateForm(props: ProductCategoryUpdateFormProps): React.ReactElement;
