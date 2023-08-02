import React, { useState } from 'react'
import { Heading, Text, useToast } from '@chakra-ui/react'
import { Input, CheckboxInput, Button } from '../../components'
import styles from '../../shared/styles/styles'
import { Link } from 'react-router-dom'

const Register = () => {
	const [fullName, setFullName] = useState('')
	const [emailAddress, setEmailAddress] = useState('')
	const [userPassword, setUserPassword] = useState('')
	const [avatar, setAvatar] = useState(null)
	const [showPassword, setShowPassword] = useState(false)
	const [rememberMe, setRememberMe] = useState(false)

	const toast = useToast()

	const toggleShowPasswordHandler = () => setShowPassword(!showPassword)
	const toggleRememberMeHandler = () => setRememberMe(!rememberMe)

	const handleAvatarChange = (e) => {
		const selectedAvatar = e.target.files[0]
		setAvatar(selectedAvatar)
	}

	const registerHandler = () => {
		if (!fullName || !emailAddress || !userPassword || !avatar) {
			toast({
				title: 'You have to fill out all the fields!',
				status: 'error',
				isClosable: true,
				position: 'top-right'
			})
		} else {
			// Handle registration logic including avatar
			toast({
				title: 'Registration is successful!',
				status: 'success',
				isClosable: true,
				position: 'top-right'
			})
		}
	}

	return (
		<div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-md'>
				<Heading textAlign='center' className='mt-6 text-gray-800'>
					Register for Your Shopper!
				</Heading>
			</div>
			<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
				<div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
					<form className='space-y-6'>
						<div>
							<label htmlFor='fullname' className='block text-sm font-medium text-gray-700'>
								Full Name
							</label>
							<div className='mt-1'>
								<Input
									type='text'
									name='fullname'
									autoComplete='name'
									required
									placeholder='John Doe'
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
								/>
							</div>
						</div>
						<div>
							<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
								Email Address
							</label>
							<div className='mt-1'>
								<Input
									type='email'
									name='email'
									autoComplete='email'
									required
									placeholder='johndoe@mail.com'
									value={emailAddress}
									onChange={(e) => setEmailAddress(e.target.value)}
								/>
							</div>
						</div>
						<div>
							<label htmlFor='password' className='block text-sm font-medium text-gray-700'>
								Password
							</label>
							<div className='mt-1'>
								<Input
									type={showPassword ? 'text' : 'password'}
									name='password'
									autoComplete='new-password'
									required
									placeholder='******'
									value={userPassword}
									onChange={(e) => setUserPassword(e.target.value)}
									isVisibilityIconValid
									showPassword={showPassword}
									showPasswordHandler={toggleShowPasswordHandler}
								/>
							</div>
						</div>
						<div>
							<label htmlFor='avatar' className='block text-sm font-medium text-gray-700'>
								Avatar
							</label>
							<div className='mt-1'>
								<Input
                  type='file'
                  id='avatar'
                  name='avatar'
                  accept='image/*'
                  onChange={handleAvatarChange}
								/>
							</div>
						</div>
						<div className={`${styles.normalFlex} justify-between`}>
							<div className={`${styles.normalFlex}`}>
								<CheckboxInput
									name='remember-me'
									id='remember-me'
									content='Remember me'
									value={rememberMe}
									onChange={toggleRememberMeHandler}
								/>
							</div>
						</div>
						<div>
							<Button
								colorScheme='teal'
								size='md'
								className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent'
								content='Register'
								onClick={registerHandler}
							/>
						</div>
						<div className={`${styles.normalFlex} w-full`}>
							<Text fontSize='md'>Already a member of </Text>
							<Link to='/login'>
								<Text fontSize='md' className='ml-1 text-teal-600'>
									Shopper? Login here.
								</Text>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register
