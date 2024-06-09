import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";



export const LoginTabs = () => {
    return (
        <Tabs defaultValue="account" className="w-auto space-y-2 sm:space-y-6">
            <TabsList>
                <TabsTrigger className='' value="account">Log in</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>


            </TabsList>
            <TabsContent value="account">
                <LoginForm>
                </LoginForm>
            </TabsContent>
            <TabsContent value="register">
                <RegisterForm>
                </RegisterForm>
            </TabsContent>
        </Tabs>
    )
}

export default LoginTabs;