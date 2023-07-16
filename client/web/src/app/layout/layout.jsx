import React, { useMemo } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeSettings } from 'shared/utils/theme'
import { useSelector } from 'react-redux'

const Layout = () => {
	const { mode } = useSelector(state => state.global)
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
			</ThemeProvider>
		</div>
	)
}

export default Layout