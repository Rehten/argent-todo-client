import React from "react";
import { ArgentButton } from "./index";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ReactTestUtils from 'react-dom/test-utils';
import TestRenderer from "react-test-renderer";


describe('ArgentButton', () => {
    let container: HTMLElement;

    beforeEach(() => {
        // подготавливаем DOM-элемент, куда будем рендерить
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // подчищаем после завершения
        unmountComponentAtNode(container);
        container.remove();
        container = (null as any) as HTMLElement;
    });

    it('should be object', () => {
        expect(ArgentButton).toBeDefined();
        expect(ArgentButton).not.toBeNull();
        expect(ArgentButton).toBeInstanceOf(Object);
    });

    it('should container HTML button node', () => {
        act(() => {
            render(<ArgentButton />, container);
        });

        const htmlButton: HTMLButtonElement | null = container.querySelector('button');
        expect(htmlButton).not.toBeNull();
    });

    it('should have div wrapper with data-test id', () => {
        const testMarker: string = 'Qwerty';

        act(() => {
            render(<ArgentButton dataTest={testMarker} />, container);
        });

        const divWrapper: HTMLDivElement | null = container.querySelector(`div[data-test]`);

        expect(divWrapper).not.toBeNull();
        expect(divWrapper?.dataset.test).toEqual(testMarker);
    });

    it('should call props.onClick after user click', () => {
        const onClick = jest.fn();

        act(() => {
            render(<ArgentButton onClick={onClick} />, container);
        });

        const btnRef: HTMLButtonElement = container.querySelector('button') as HTMLButtonElement;

        ReactTestUtils.Simulate.click(btnRef);

        expect(onClick).toHaveBeenCalled();
    });

    it('should be same as snapshot', () => {
        const rslt = TestRenderer.create(<ArgentButton dataTest="Snapshot Testing" variant="outline-danger" size="lg" active />);
        expect(rslt).toMatchSnapshot();
    });
});