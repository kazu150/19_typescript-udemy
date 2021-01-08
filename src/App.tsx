import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data.json';

type Users = typeof Data;
// ↑typeofを使うことで、json内のデータを型推定することができるから、そこがめちゃ強力

function App() {
    //  Basic Types
    const name = 'taro';
    let name2 = 'jiro';
    // constとletで、推論される型が変わってくる

    type OBJ = {
        key: string;
        key2: string | null;
    };

    interface OBJ {
        key: string;
        key2: string | null;
    }
    // 今回はinterfaceしか出てきてないけど、多分上の２つの書き方は同じ

    let obj: OBJ = { key: 'a', key2: 'b' };

    // Intersection Types
    type PROFILE = {
        age: number;
        city: string;
    };

    type LOGIN = {
        username: string;
        password: string;
    };

    type USER = PROFILE & LOGIN;

    const userA: USER = {
        age: 30,
        city: 'tokyo',
        username: 'xxxx',
        password: 'yyyy',
    };

    // Union Types
    let value: boolean | number;
    value = true;
    //value = 'hello';  ←エラーが出る

    let arrayUni: (number | string)[];
    arrayUni = [0, 1, 2, 'hello' /** true **/];

    //Literal + Union Types
    let company: 'Facebook' | 'Google' | 'Amazon';
    company = 'Amazon';
    // company = 'Apple' ←エラー出る

    let memory: 256 | 512;
    // memory = 12; ←エラー出る

    // typeof
    let msg: string = 'hi';
    let msg2: typeof msg;
    //↑typeofでべつの変数の型を継承することができる。↓objectにも使うことができる

    let animal = { cat: 'small cat' };
    let newAnimal: typeof animal = { cat: 'big cat' };

    // keyof
    type KEYS = {
        primary: string;
        secondary: string;
    };
    let key: keyof KEYS;

    // typeof + keyof
    const SPORTS = {
        soccer: 'soccer',
        baseball: 'baseball',
    };

    let keySports: keyof typeof SPORTS;
    keySports = 'soccer';

    // enum(列挙型)
    enum OS {
        Windows,
        Mac,
        Linux,
    }
    interface PC {
        id: number;
        OSType: OS;
    }
    const PC1: PC = {
        id: 1,
        OSType: OS.Windows,
    };
    const PC2: PC = {
        id: 2,
        OSType: OS.Mac,
    };

    // 型の互換性
    const comp1 = 'test';
    let comp2: string = comp1;

    let comp3: string = 'test';
    // let comp4 'test' = comp3
    // ↑これはできない。文字列リテラル型が指定されてるものに、文字列型はいれられない（そりゃそうだ）

    let funcComp1 = (x: number) => {};
    let funcComp2 = (x: string) => {};
    // funcComp1 = funcComp2
    // ↑引数部分の型が違うと、代入できない

    // Generics
    interface GEN<T> {
        item: T;
    }

    const gen0: GEN<string> = { item: 'test' };
    const gen1: GEN = { item: 'hello' };
    // const gen1: GEN<number> = {item: 12}
    // どっちもエラーになる

    interface GEN1<T = string> {
        item: T;
    }
    const gen1: GEN1 = { item: 'test' };
    // ↑デフォルト値を設定しておくと、<>をつけなくてもエラーにならない

    interface GEN2<T extends string | number> {
        item: T;
    }
    // ↑Genericに指定できる型を制限することができる。そのため、以下はNG
    // const gen4: GEN<boolean> = {item: true}

    function funcGen<T>(props: T) {
        return { item: props };
    }
    const gen6 = funcGen('test');
    // ↑関数の場合、引数に文字列を直接渡すだけで、typescriptがGenericsの型推論をしてくれる
    const gen7 = funcGen<string | null>(null);

    function funcGen1<T extends string | null>(props: T) {
        return { value: props };
    }
    const gen8 = funcGen1('hello');
    // const gen9 = funcGen1(123);
    // ↑はちゃんとエラーになる

    interface Props {
        price: number;
    }
    function funcGen3<T extends Props>(props: T) {
        return { value: props.price };
    }
    const gen10 = funcGen3({ price: 1 });

    // アロー関数バージョン
    const funcGen4 = <T extends Props>(props: T) => {
        return { value: props.price };
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
