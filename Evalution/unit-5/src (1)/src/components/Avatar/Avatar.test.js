import {render} from "@testing-library/react"
import Avatar from "./Avatar"


describe("render avtar compo",()=>{
    it("should render correctly",()=>{
        render(<Avatar size="xs" name="Anand Kulkarni"/>)
    })

    it("should render for babu",()=>{
        render(<Avatar size="sm" name="Baburoa"/>)
    })
    it("should render for albrt",()=>{
        render(<Avatar size="md" name="Albert S"/>)
    })
    it("should render for Ritest",()=>{
        render(<Avatar size="lg" name="Ritesh Firodiya"/>)
    })
})