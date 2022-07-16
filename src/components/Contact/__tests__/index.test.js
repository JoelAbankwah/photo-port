/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '../index'

afterEach(cleanup);

describe("Contact component", () => {

    it('renders', () => {
        render(<ContactForm />)
    });

    it('matches h1 tag', () => {
        const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('title')).toHaveTextContent('Contact Me')
});

    it('matches submit button', () => {
        const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('submit-btn')).toHaveTextContent('Submit')
    });
});