Instalar react router

```
npm i react-router-dom
```

1. Router setup -> BrowserRouter en index
2. Estructura del router -> Routes, Route en App

   - home
   - personal
   - books

   ```
   <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/books' element={<BooksList />} />
        <Route path='/secret' element={<h1>Secret Page</h1>} />
      </Routes>
    </div>
   ```

3. Navigation
   Instead of anchor we use `Link` component. Anchor inside, but its not refreshing reloading app.
4. Dinamic routes and new
5. 404

```
 <div className='App'>
      <nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/books'>Books</Link>
        </li>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/books' element={<BooksList />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/secret' element={<h1>Secret Page</h1>} />
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </div>
```

6. Nesting Routes

```
<Routes>
        <Route path='/' element={<Home />} />

        <Route path='/books'>
          <Route path='' element={<BooksList />} />
          <Route path=':id' element={<Book />} />
        </Route>
        <Route path='/secret' element={<h1>Secret Page</h1>} />
        <Route path='*' element={<h1>Not found</h1>} />
</Routes>
```
